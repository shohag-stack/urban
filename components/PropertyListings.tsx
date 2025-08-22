'use client'
import React, { useState, Suspense } from 'react'
import PropertyCardHorizontal from '@/components/cards/PropertyCardHorizontal'
import PropertyCard from '@/components/cards/PropertyCard'
import ToggleButton from '@/components/ToggleButton'
import property from '../public/Data/property'
import { useSearchParams } from 'next/navigation'
import PropertyMap from '@/components/PropertyMap'
import Property from '@/public/types/types'
import { APIProvider } from '@vis.gl/react-google-maps'
import PropertyListingsLoading from './PropertyListingsLoading'

function ListingsContent() {
    const [view, setView] = useState('list')
    const searchParams = useSearchParams()
    const transactionType = searchParams.get('transactionType')
    const beds = searchParams.get('beds')
    const minPrice = searchParams.get('minPrice')
    const homeType = searchParams.get('homeTypes')
    const [hoverProperty, setHoverProperty] = useState<Property | null>(null)
    const mapKey = process.env.NEXT_PUBLIC_MAP_KEY || ''

    const parsePriceRange = (priceRange: string | null) => {
        if (!priceRange) return { min: 0, max: Infinity }
        
        if (priceRange.includes('-')) {
            const [min, max] = priceRange.split('-')
            return {
                min: parseInt(min) || 0,
                max: max.endsWith('+') ? Infinity : parseInt(max) || Infinity
            }
        } else if (priceRange.endsWith('+')) {
            return {
                min: parseInt(priceRange.replace('+', '')) || 0,
                max: Infinity
            }
        }
        
        return { min: 0, max: Infinity }
    }

    const filteredProperty = property.filter((p) => {
        const priceRange = parsePriceRange(minPrice)
        return (
            (!transactionType || transactionType.toLowerCase() === p.transaction_type.toLowerCase()) &&
            (!beds || parseInt(beds) === p.bedrooms) &&
            (!minPrice || (parseInt(p.price.replace(/[^0-9]/g, '')) >= priceRange.min && parseInt(p.price.replace(/[^0-9]/g, '')) <= priceRange.max)) &&
            (!homeType || homeType.toLowerCase() === p.type.toLowerCase())
        )
    })

    const totalProperty = filteredProperty.length

    return (
        <div className='bg-gray'>
            <div className='section pt-10'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <h6>Viewing {totalProperty} Homes {transactionType ? ` for ${transactionType}` : ""} in New York</h6>
                        <p>Showing listings marketed by all brokers in the searched area.</p>
                    </div>
                    <div className='items-end'>
                        <ToggleButton options={["List", "Map"]} onChange={setView} />
                    </div>
                </div>

                {
                    view === "list" ? (
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
                            {
                                filteredProperty.map((property, idx) => {
                                    return (
                                        <PropertyCard key={idx} property={property} />
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className={`flex relative gap-15`}>
                            <div className='flex-1/2 flex flex-col gap-y-2 overflow-y-scroll'>
                                {
                                    filteredProperty.map((property, idx) => {
                                        return (
                                            <PropertyCardHorizontal key={idx} hoverProperty={setHoverProperty} property={property} />
                                        )
                                    })
                                }
                            </div>
                            <div className='flex-1/2 h-[80vh] sticky top-30'>
                                <APIProvider apiKey={mapKey}>
                                    <PropertyMap hoverProperty={hoverProperty} filteredProperty={filteredProperty} />
                                </APIProvider>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export function PropertyListings() {
  return (
    <Suspense fallback={<PropertyListingsLoading/>}>
      <ListingsContent />
    </Suspense>
  )
}