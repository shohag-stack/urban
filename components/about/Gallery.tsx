"use client"
import React from 'react'
import { useState, useRef } from 'react'
import {motion} from "framer-motion"
import {CirclePlay} from "lucide-react"

export default function Gallery () {

    const images = [
        {src: "/images/exceptional.png", title: "exceptional", video: "/videos/first.mp4"},
        {src: "/images/gallery2.png", title: "gallery2", video: "/videos/second.mp4"},
        {src: "/images/gallery3.png", title: "gallery3",video: "/videos/third.mp4"},
    ]

    const[active,setActive] = useState<number>(0)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    const handleMouseEnter = (index: number) => {
        setActive(index)
        if (videoRefs.current[index]) {
        videoRefs.current[index]?.play()
        }
    }

  const handleMouseLeave = (index: number) => {
    setActive(0)
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause() // pause but keep frame
    }
  }



  return (
    <div className='section pt-0'>
        <div className='flex gap-6 h-[500px]'>
            {
                images.map((img,index)=>(

                    <div onMouseLeave={()=> handleMouseLeave(index)} onMouseEnter={()=> handleMouseEnter(index)} key={index} className={`relative ${active === index ? "flex-[2]" : "flex-[1]"} transition-all duration-500`}>
                
                        <video
                            src={img.video}
                            muted
                            loop
                            ref={(el)=> void ( videoRefs.current[index] = el)}
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        <motion.div 
                            initial={{ y: 40, opacity: 0 }}
                            animate={active === index ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute bottom-4 left-4 text-white" >
                            
                            <div className='flex gap-6 flex-col'>
                            <div>
                                <CirclePlay size={100} strokeWidth={0.5}/>
                            </div>
                            <div>
                                <h4 className='text-white font-medium'>Exceptional Projectss</h4>
                                <div className='flex gap-4'>
                                    <button className='btn font-light border-white text-white hover:bg-white/15 px-4 text-sm'>Best of Best</button>
                                    <button className='btn font-light border-white text-white hover:bg-white/15 text-sm px-4 py-0'>Quality Guaranteed</button>
                                    <button className='btn font-light border-white text-white hover:bg-white/15 text-sm px-4 py-0'>Good to Buy</button>
                                </div>
                            </div>
                            </div>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
