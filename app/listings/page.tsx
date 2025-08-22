'use client'
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"
import PropertyListingsLoading from "@/components/PropertyListingsLoading"
import PropertyListings from "@/components/PropertyListings"
import { Suspense } from "react"
// Main page component with Suspense boundary
export default function Page() {
    return (
        <SmoothScrollWrapper>
            <Suspense fallback={<PropertyListingsLoading />}>
                <PropertyListings />
            </Suspense>
        </SmoothScrollWrapper>
    )
}