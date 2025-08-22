'use client'
import React, { Suspense } from 'react'
import PropertyFilters from '@/components/PropertyFilters'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <>
      <PropertyFilters/>
     <Suspense>
        {children}
     </Suspense>
    </>
    
  )
}

export const dynamic = 'force-dynamic'


