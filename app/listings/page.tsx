'use client'
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"
import PropertyListingsLoading from "@/components/PropertyListingsLoading"
import { Suspense } from "react"
import dynamic from "next/dynamic"
// Main page component with Suspense boundary
export default function Page() {

    const PropertyListings = dynamic(() => import('@/components/PropertyListings'), {
    ssr: false,
    loading: () => <PropertyListingsLoading />
})

    return (
        <SmoothScrollWrapper>
            <Suspense fallback={<PropertyListingsLoading />}>
                <PropertyListings />
            </Suspense>
        </SmoothScrollWrapper>
    )
}