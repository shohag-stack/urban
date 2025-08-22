'use client'
import React, { Suspense, useEffect } from 'react'
import ToggleButton from '../components/ToggleButton'
import { useState } from 'react'
import SearchInput from '@/components/SearchInput'
import SelectFilter from '../components/SelectFilter'
import { usePathname , useSearchParams, useRouter } from 'next/navigation'



function FiltersNav() {
  
  const [transactionType, setTransactionType] = useState("")
  const [price, setPrice] = useState('')
  const [beds, setBeds] = useState("")
  const [homeTypes, setHomeTypes] = useState('')

  const priceOptions = [
  { value: "0-500", label: "$0 - $500" },
  { value: "500-1000", label: "$500 - $1000" },
  { value: "1000", label: "$1000+" }
]
  const bedOptions = ["1", "2", "3"]
  const homeOptions = ["Resident", "Commercial"]

  const pathname = usePathname()
  const isListingPage = pathname === "/listings"

  const searchParams = useSearchParams()
  const router = useRouter()
  useEffect(()=> {
      const params = new URLSearchParams(searchParams.toString())
      if (price) {
    params.set("minPrice", price.toString())
  } else {
    params.delete("minPrice")
  }

  if (beds) {
    params.set("beds", beds)
  } else {
    params.delete("beds")
  }

  if (homeTypes) {
    params.set("homeTypes", homeTypes)
  } else {
    params.delete("homeTypes")
  }

  if (transactionType) {
    params.set("transactionType", transactionType)
  } else {
    params.delete("transactionType")
  }
      router.push(`?${params.toString()}`)
  }, [transactionType,price,beds,homeTypes,router])

  return (

    <div>
      {
        isListingPage && (
          <div className='section pb-4'>
          <div className='py-20 sm:py-15 md:py-4 flex gap-2'>
            <SearchInput/>
            <ToggleButton options={["Buy", 'Rent']} onChange={setTransactionType} />
            <SelectFilter value={price} onChange={setPrice} options={priceOptions}/>
            <SelectFilter value={beds} onChange={setBeds} options={bedOptions}/>
            <SelectFilter value={homeTypes} onChange={setHomeTypes} options={homeOptions}/>
          </div>
        </div>
        )
      }
    </div>
  )
}


export default function PropertyFilters() {
  return (
    <Suspense fallback={<div>Filter is listings...</div>}>
        <FiltersNav/>
    </Suspense>
  )
}
