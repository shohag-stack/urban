'use client'
import React from 'react'
import Image from 'next/image'
import ImageLeftToRightSlide from './animation/ImageLeftToRightSlide'

export default function FooterTop() {
    return (
        <div>
            <div className='section pt-0 grid grid-cols-1 md:grid-cols-2 gap-14'>
                <div className="relative w-full h-full overflow-hidden">
                    {/* Actual image stays full size */}
                    <Image
                        className="w-full h-full object-cover"
                        src={
                            'https://images.unsplash.com/photo-1717137389747-d1d4ced6abc8?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0'
                        }
                        width={652}
                        height={792}
                        alt="infoImage"
                    />
                    {/* Animated mask */}
                    <ImageLeftToRightSlide />

                </div>
                <div className="info">
                    <div>
                        <h2 className=' pb-4 md:pb-10'>Building Dreams, One Home at a Time</h2>
                        <p>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market. These should help convey a sense of aspiration and possibility, which are often associated with the real estate market. These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                    </div>
                    <div className="details grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                        <div>
                            <h4>150+</h4>
                            <p>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                        </div>

                        <div>
                            <h4>300+</h4>
                            <p>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
