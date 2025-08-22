'use client'
import SmoothScrollWrapper from "../../components/SmoothScrollWrapper"
import PropertyListingsLoading from "../../components/PropertyListingsLoading"
import { Suspense } from "react"
import dynamic from "next/dynamic"
// Main page component with Suspense boundary

const PropertyListings = dynamic(() => import('../../components/PropertyListings'), {
    ssr: false,
    loading: () => <PropertyListingsLoading />
})


export default function Page() {

    return (
        <SmoothScrollWrapper>
            <Suspense fallback={<PropertyListingsLoading />}>
                <PropertyListings />
            </Suspense>
        </SmoothScrollWrapper>
    )
}