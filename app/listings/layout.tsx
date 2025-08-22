'use client'
import React from 'react'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  const PropertyFilters = dynamic(()=> import('../../components/PropertyFilters'), {
    ssr: false,
  })

  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <PropertyFilters/>
      {children}
    </Suspense>
    
  )
}
