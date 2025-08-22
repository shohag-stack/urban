'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {ChevronLeft, ChevronRight} from "lucide-react"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  const pathname = usePathname()
  const isListingPage = pathname === "/listings"
  const segmants = pathname.split('/').filter(Boolean)

  return (

    <div>
      {
        !isListingPage && (
          <div className='section pb-1'>
          <div className='py-20 sm:py-15 md:py-4 flex gap-2'>
            <nav>
                <ul className="flex items-center gap-3 text-gray-600 text-sm">
                    <li>
                        <Link className='flex text-black underline' href={`/listings`}> <ChevronLeft/> Back</Link>
                    </li>
                    {
                        segmants.map((path,index)=>{
                            const href = "/" + segmants.slice(0,index + 1).join("/")
                            const isLast = index === segmants.length - 1
                            return(
                                <li key={index} > <Link className="flex underline hover:text-primary items-center gap-2 text-sm" href={href}> {path} {!isLast && <ChevronRight size={14} />} </Link> </li>
                            )
                        })
                    }
                </ul>
        </nav>
          </div>
        </div>
        )
      }
      {children}
    </div>
  )
}
