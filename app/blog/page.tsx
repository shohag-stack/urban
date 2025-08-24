import React from 'react'
import Blog from "../../public/Data/blog.json"
import BlogCard from '@/components/cards/Blog/BlogCard';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

export default function page() {

  return (
    <SmoothScrollWrapper>
        <div className='section'>
            <div className='heading pt-15 sm:py-10'>
                <h4 className='text-center'>Luxury Property News</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    Blog.map((blog,idx)=> {
                        return (
                            <div key={idx}>
                                <BlogCard blog={blog}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </SmoothScrollWrapper>
  )
}
