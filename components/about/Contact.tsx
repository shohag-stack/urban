import React from 'react'
import ImageLeftToRightSlide from '../animation/ImageLeftToRightSlide'
import Image from 'next/image'

export default function Contact() {


    const image = "/images/architect.png"

    return (
        <div>
            <div className='section pb-0'>
                <div className='pt-15 text-center pb-5 md:pb-20'>
                    <h2>Contact</h2>
                </div>
            </div>
            <div className='relative'>
                <Image alt='contact' src={"https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1080} height={1920} className='w-full object-cover' />
            </div>
            <div className='bg-gray'>
                <div className='section'>
                    <div className=' flex flex-col lg:flex-row gap-10 md:gap-10 lg:gap-40'>
                        <div className='flex-1/2'>
                            <h3>Please do not hesitate to contact us</h3>
                            <div>
                                <p>Ad noster apeirian qui. Sea mucius iudicabit cu, nam latine euismod ea. Tempor copiosae philosophia id has. Eam novum liberavisse in. Modus populo probatus cum ea, ex graece </p>
                                <p>postulant qui, fugit dolor et eam. Quo cu putent causae. Sit ea diam ullum, tation cu voluptua facilisi nec no. Ei laudem iudicabit duo, at quem munere eam putant mediocrem.</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap flex-1/2 h-fit gap-10'>
                            <div className=' w-full sm:w-1/2'>
                                <h6>E-mail</h6>
                                <p>qi144@realestate.com</p>
                            </div>
                            <div className='w-1/2'>
                                <h6>Address</h6>
                                <p>Maria Theresien Platz, NY</p>
                            </div>

                            <div className='w-1/2'>
                                <h6>Phone No</h6>
                                <p>156-677-124-442-2887</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
