'use client'
import React from 'react'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  const PropertyFilters = dynamic(()=> import('../../components/PropertyFilters'))

  return (
    <Suspense fallback>
      <PropertyFilters/>
      {children}
    </Suspense>
    
  )
}
