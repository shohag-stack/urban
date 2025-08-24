import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
import Image from 'next/image'

export default function PropertySlider({sliders} : {sliders: string[]}) {


    const [emblaImageRef, emblaApi] = useEmblaCarousel({
        loop: true
    })
    const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({

    })

    const onThumbClick = useCallback((index:number)=>{
        if( !emblaApi || !emblaThumbApi  ) return 
        emblaApi.scrollTo(index)
        
    }, [emblaApi, emblaThumbApi])


    return (
        <div>
            <div className='embla'>
                <div className='embla__viewport' ref={emblaImageRef}>
                    <div className='embla__container'>
                        {sliders.map((item, idx)=> {
                           return  <div className='w-full embla_slide overflow-hidden relative  h-[200px] md:h-[500]' key={idx}> <Image className='w-full' src={item} fill alt={idx.toString()} objectFit='cover' /> </div>
                        })}
                    </div>
                </div>
            </div>

            <div className='embla embla_thumb py-2'>
                <div className='embla__viewport' ref={emblaThumbRef}>
                    <div className='embla__container'>
                        {sliders.map((src, index) => (
                            <div
                                key={index}
                                className="embla_slide cursor-pointer relative h-[100px] w-[150px] mr-2"
                                onClick={() => onThumbClick(index)}
                            >
                                <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                />
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
