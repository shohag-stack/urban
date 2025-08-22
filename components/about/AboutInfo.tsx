import React from 'react'
import ImageLeftToRightSlide from '../animation/ImageLeftToRightSlide'
import Image from 'next/image'

export default function AboutInfo() {


    const image = "/images/architect.png"


  return (
    <div className='section'>
    
                <div className='pt-10 text-center pb-20'>
                    <h1>Some Space. Some Memories</h1>
                </div>
    
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
    
                    <div className="left-image relative overflow-hidden">
                        <ImageLeftToRightSlide/>
                        <Image src={image} alt='architect_image' width={704} height={883} />
                    </div>
    
                    <div className="right-text">
                        <div className='pb-40'>
                            <p className='text-1xl text-primary'>Our platform is your gateway to an extensive collection of properties, carefully curated to match your unique needs and preferences.
                            </p>
                            <p className='text-1xl text-primary'>Experience a seamless journey as you explore our diverse range of listings, each promising the perfect blend of comfort and convenience</p>
                        </div>
    
                        <div>
                            <h1 className='pb-5'>Some Space.
                            </h1>
                            <div className='bg-primary h-[1px] w-full'></div>
                            <div className='pt-10'>
                                <p className='text-1xl text-primary'>Our platform is your gateway to an extensive collection of properties, carefully curated to match your unique needs and preferences.</p>
                                 <p className='text-1xl text-primary'>Experience a seamless journey as you explore our diverse range of listings, each promising the perfect blend of comfort and convenience</p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
  )
}
