import React from 'react'
import Image from 'next/image';
import footerData from '../public/Data/footer'
import FooterLink from '../components/FooterLink';

export default function Footer() {
    const logo = "/images/clay-white.svg"; // Update with your logo path
  return (
    <div className='bg-primary'>
        <div className='section'>
            <div className='grid md:grid-cols-6 gap-15 '>
                <div className='logo-area col-span-2'>
                    <Image className='pb-5' src={logo} width={98} height={24} alt='footer-logo'/>
                    <p>I&apos;ve traveled across the States and found a slice of home in every bite here. The flavors are as genuine as it gets! I&apos;ve traveled across the States and found a slice of home in every bite here. The flavors are as genuine as it gets!</p>
                </div >
                            {   
                            footerData.map((item, index)=> (
                                <FooterLink key={index} title={item.title} items={item.links}/>
                            ))
                    }
            </div>
        </div>
        <div>
            <div className='text-center text-white py-4 border-t border-white/10'>
                <p className='text-md'>© 2025 Urban. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
