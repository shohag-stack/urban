import React from 'react'

export default function Promotes() {
  return (
    <div className='bg-black text-white relative pt-50' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className='absolute inset-0 bg-black opacity-50 top-0 left-0 z-[1]'></div>
        <div className='section relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 items-end'>
                <div className="cta col-span-2">
                    <h1 className='text-white'>Building Dreams, One Home at a Time</h1>
                    <p className='py-4 text-white'>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                    <button className='btn-secondary my-5'>Contact Us</button>
                </div>

                <div className="cta">
                    <h1 className='text-white'>150+</h1>
                    <p className='py-4 text-white'>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                    
                </div>

                <div className="cta">
                    <h1 className='text-white'>90</h1>
                    <p className='py-4 text-white'>These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
