import React from 'react'
import Image from 'next/image'
import data from "../../../public/Data/blog.json"
import BlogTypes from '@/public/types/blogTypes'
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper'
import {Calendar} from "lucide-react"
export default function page({params}: {params: {slug:string}}) {

  const blogs = data as BlogTypes[]
  const singleBlog = blogs.find((b)=> b.slug === params.slug)

  if (!singleBlog) {
    return ( <div> No Blogs Found </div> )
  }

  return (
    <SmoothScrollWrapper>
    <div className='section'>
      <div className='flex justify-center overflow-hidden'>
          <div className="max-w-3xl w-full flex flex-col text-left px-0 md:px-4">
            <div className="relative w-[750] h-[400px]">
              <Image
                src={singleBlog.featuredImage[0]}
                alt={singleBlog.title}
                fill
                className="object-cover py-5"
              />
            </div>
            <h4>{singleBlog.title}</h4>
            <div className='flex gap-2 md:gap-3 items-center pb-3'>
              <div className='flex items-center justify-center gap-3'>
                <div className='rounded-full w-[50] h-[50] overflow-hidden'>
                  <Image objectFit='cover' src={singleBlog.author.avatar} width={50} height={50} alt={singleBlog.author.name}/>
                </div>
                <h6 className='mb-0 text-sm md:text-md'>{singleBlog.author.name}</h6>
              </div>
              <div className='flex gap-3 items-center'>
                <Calendar size={20}/><span className=' text-sm md:text-md'>{singleBlog.date}</span>
              </div>
            </div>
            <p>{singleBlog.content}</p>
            <div className="flex flex-col md:flex-row w-full py-4 gap-5 mb-6">
              <div className="relative w-full md:w-1/2 h-[300px]">
                <Image
                  src={singleBlog.featuredImage[1]}
                  alt={singleBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full md:w-1/2 h-[300px]">
                <Image
                  src={singleBlog.featuredImage[2]}
                  alt={singleBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p>{singleBlog.content}</p>
          </div>
      </div>
    </div>
    </SmoothScrollWrapper>
  )
}
