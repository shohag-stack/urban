'use client'
import React, { useEffect } from 'react'
import ToggleButton from '../components/ToggleButton'
import { useState } from 'react'
import SearchInput from '@/components/SearchInput'
import SelectFilter from '../components/SelectFilter'
import { usePathname , useSearchParams, useRouter } from 'next/navigation'
import { X } from "lucide-react"



export function FiltersNav() {
  
  const [transactionType, setTransactionType] = useState("")
  const [price, setPrice] = useState('')
  const [beds, setBeds] = useState("")
  const [homeTypes, setHomeTypes] = useState('')
  const [deleteFilter, setDeleteFilter] = useState(false)

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
  if(deleteFilter) {
     // clear all
     setPrice("")
     setBeds("")
     setHomeTypes("")
     setTransactionType("")
    setDeleteFilter(false)
    }

    router.push(`?${params.toString()}`)
  }, [transactionType,price,beds,homeTypes,router,deleteFilter])

  return (

    <div>
      {
        isListingPage && (
          <div className='section pb-0 md:pb-4'>
          <div className=' mt-10 mb-5 md:mt-10 lg:pt-5 xl:mt-0 sm:flex flex flex-wrap md:gap-2 gap-4'>
            <SearchInput/>
            <ToggleButton options={["Buy", 'Rent']} onChange={setTransactionType} />
            <SelectFilter value={price} onChange={setPrice} options={priceOptions}/>
            <SelectFilter value={beds} onChange={setBeds} options={bedOptions}/>
            <SelectFilter value={homeTypes} onChange={setHomeTypes} options={homeOptions}/>
            <button onClick={()=>setDeleteFilter(true) } className='px-4 py-3 focus:outline-none appearance-none h-full underline flex justify-center items-center gap-1 hover:text-secondary cursor-pointer text-[9] md:text-sm'> <X size={20}/> Clear filter</button>
          </div>
        </div>
        )
      }
    </div>
  )
}