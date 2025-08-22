import React from 'react'

export default function ContactForm() {

    return (
        <div>
            <div>
                <div className='section'>
                    <div className='flex gap-40'>
                        <div className='flex-1/2'>
                            <h3>We are looking forward to your enquiry</h3>
                            <div>
                                <p>Ad noster apeirian qui. Sea mucius iudicabit cu, nam latine euismod ea. Tempor copiosae philosophia id has. Eam novum liberavisse in. Modus populo probatus cum ea, ex graece </p>
                                <p>postulant qui, fugit dolor et eam. Quo cu putent causae. Sit ea diam ullum, tation cu voluptua facilisi nec no. Ei laudem iudicabit duo, at quem munere eam putant mediocrem.</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap flex-1/2'>
                           <form className='w-full' action="">

                                <div className='flex flex-col pb-5'>
                                    <label className=' pb-2 text-md text-black font-semibold' htmlFor=""> Name </label>
                                    <input className='py-3 border-b w-full focus:outline-none transition-all ease-in-out' type="text" placeholder='John Doe' />
                                </div>

                                <div className='flex flex-col pb-5'>
                                    <label className=' pb-2 text-md text-black font-semibold' htmlFor=""> email </label>
                                    <input className='py-3 border-b w-full focus:outline-none transition-all ease-in-out' type="email" placeholder='qi144@realestate.com' />
                                </div>

                                <div className='flex flex-col pb-5'>
                                    <label className=' pb-2 text-md text-black font-semibold' htmlFor=""> Message </label>
                                    <textarea className='py-3 border-b w-full focus:outline-none transition-all ease-in-out' placeholder='Write your message here ...' />
                                </div>

                                <button className='btn-primary hover:bg-secondary hover:text-white'>
                                    Send Message
                                </button>
                                
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
