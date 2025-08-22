import React from 'react'
import Link from 'next/link';

export interface FooterLinkProps {
  title: string;
  items:
    {
      name: string;
      href: string;
    }[];
}


export default function FooterLink({title, items} : FooterLinkProps) {
  return (
    <div>
        <h6 className='text-white font-medium text-md'>{title}</h6>
        <ul className='mt-4 space-y-2'>
            {
            items.map((item, idx)=>(
                <li key={idx} className='text-secondary'>
                    <Link href={item.href} >{item.name}</Link>
                </li>
            ))
            }
            </ul>
    </div>
  )
}
