import React from 'react'
import property from '../public/Data/property'
import Image from 'next/image'

export type AgentProps = {
    agent: {
        name: string;
        email: string;
        image: string
    }
}

export default function SideBar({agent}: AgentProps) {
  return (
        <div className='sidebar-container bg-amber-200 px-5 py-5 gap-4 flex flex-col sticky top-35'>
            <div className='sidebar-agent text-center flex flex-col items-center gap-3'>
                <h5> Your Personal Agent {agent.name} is here to help</h5>
                <div className='w-[100] h-[100] overflow-hidden rounded-full border-4 border-emerald-500'>
                    <Image src={agent.image} width={100} height={100} alt='agent' className='object-cover rounded-full'/>
                </div>
            </div>
            <div className="input flex flex-col gap-2 ">
                <input className='input-rounded w-full py-3' type="text" placeholder='Full name' required />
                <input className='input-rounded w-full py-3' type="email" placeholder='Email' required />
                <input className='input-rounded w-full py-3' type="phone" placeholder='Phone number' required />
                <textarea className='input-rounded w-full h-[100] rounded-2xl' placeholder='write your message' required />
                <button className='btn-primary hover:bg-secondary hover:text-white'> Email Agent</button>
                
            </div>
        </div>
  )
}
