'use client'
import React from 'react'
import { Suspense } from 'react'
import PropertyFilters from '@/components/PropertyFilters'




export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  


  return (
    <Suspense>
      <PropertyFilters/>
      {children}
    </Suspense>
    
  )
}
