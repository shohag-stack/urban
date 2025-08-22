import React from 'react'
import AboutInfo from '../../components/about/AboutInfo'
import Gallery from '../../components/about/Gallery'
import HappyCustomer from '@/components/about/HappyCustomer'
import InstagramGallery from '@/components/about/InstagramGallery'
import Faq from '@/components/Faq'
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper'

export default function page() {

  return (
    <SmoothScrollWrapper>
        <AboutInfo/>
        <Gallery/>
        <HappyCustomer/>
        <InstagramGallery/>
        <Faq/>
    </SmoothScrollWrapper>
  )
}
