import React from 'react'
import Image from 'next/image';
import BlogTypes from '@/public/types/blogTypes';
import Link from 'next/link';

export interface BlogCardProps {
  blog: BlogTypes; 
}

export default function BlogCard({blog} : BlogCardProps) {

    const bath = "icon/bath.svg";
    const bed = "icon/bed.svg";
    const map = "icon/map.svg";
    const home = "icon/home.svg";
    
    return (
        <div className="overflow-hidden h-full bg-white" key={blog.id}>
            <Link href={`/blog/${blog.slug}`}>
            <div className='overflow-hidden'>
                <Image src={blog.featuredImage[0]} alt={blog.title} width={424} height={460} className="w-full h-[250] object-cover hover:scale-105 transition-all ease-in-out duration-500" />
            </div>
            <div className=" py-4 bg-white">
                    <h6 className="font-semibold mt-2 text-secondary hover:text-primary">{blog.title}</h6>
                    <p>{blog.excerpt}</p>
                
            </div>
            </Link>
        </div>
    )
}
