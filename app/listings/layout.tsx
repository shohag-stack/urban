'use client'
import React from 'react'
import PropertyFilters from '@/components/PropertyFilters'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {


  return (
    <>
      <PropertyFilters/>
     {children}
    </>
    
  )
}

export const dynamic = 'force-dynamic'


