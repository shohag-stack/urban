import React from 'react'
import Contact from '../../components/about/Contact'
import ContactForm from '../../components/about/ContactForm'
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper'



export default function page() {

  return (
    <SmoothScrollWrapper>
        <Contact/>
        <ContactForm/>
    </SmoothScrollWrapper>
  )
}
