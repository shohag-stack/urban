"use client"
import React, { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronRight, ChevronLeft} from "lucide-react"

export default function HappyCustomer() {

    const avatar = "/images/testi_avatar.png"
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className='bg-gray'>
            <div className='section relative'>
                <h3>HappyCustomer</h3>
                <div className='pt-10 embla' ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla_slide">
                            <p className='text-2xl text-primary w-3/4'>Our platform is your gateway to an extensive collection of properties, carefully curated to match your unique needs and preferences.
                                Experience a seamless journey as you explore our diverse range of listings, each promising the perfect blend of comfort and convenience</p>
                            <div className='user'>
                                <div className='pb-4'><Image src={avatar} alt='avatar' className='rounded-full' height={70} width={70} /></div>
                                <div>
                                    <h6>Sarah Johnson</h6>
                                    <p>Financial Analyst</p>
                                </div>
                            </div>
                        </div>

                        <div className="embla_slide">
                            <p className='text-2xl text-primary w-3/4'>Our platform is your gateway to an extensive collection of properties, carefully curated to match your unique needs and preferences.
                                Experience a seamless journey as you explore our diverse range of listings, each promising the perfect blend of comfort and convenience</p>
                            <div className='user'>
                                <div className='pb-4'><Image src={avatar} alt='avatar' className='rounded-full' height={70} width={70} /></div>
                                <div>
                                    <h6>Sarah Johnson</h6>
                                    <p>Financial Analyst</p>
                                </div>
                            </div>
                        </div>

                        <div className="embla_slide">
                            <p className='text-2xl text-primary w-3/4'>Our platform is your gateway to an extensive collection of properties, carefully curated to match your unique needs and preferences.
                                Experience a seamless journey as you explore our diverse range of listings, each promising the perfect blend of comfort and convenience</p>
                            <div className='user'>
                                <div className='pb-4'><Image src={avatar} alt='avatar' className='rounded-full' height={70} width={70} /></div>
                                <div>
                                    <h6>Sarah Johnson</h6>
                                    <p>Financial Analyst</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute top-3/4 right-0'>
                    <button
                        onClick={scrollPrev}
                        className="btn"
                    >
                        <ChevronLeft/>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="btn"
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}
