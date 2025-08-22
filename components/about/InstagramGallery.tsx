import React from 'react'
import Image from 'next/image'

export default function InstagramGallery() {

    const images = [
        "/images/image38.png", 
        "/images/image39.png", 
        "/images/image40.png", 
        "/images/image41.png", 
        "/images/image42.png"
    ]
  return (
    <div className='pt-30 pb-0'>
        <div className="w-full overflow-hidden group">
        {/* Slider container */}
            <div className="flex animate-marquee">
                {[...images, ...images].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 h-[350px] mx-2 relative cursor-pointer">
                    <Image
                    src={img}
                    alt="instagram"
                    fill
                    className="object-cover"
                    />
                </div>
                ))}
        </div>
    </div>
    </div>
  )
}
