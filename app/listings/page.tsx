'use client'
import SmoothScrollWrapper from "../../components/SmoothScrollWrapper"
import PropertyListings from "@/components/PropertyListings"

export default function Page() {

    return (
        <SmoothScrollWrapper>
            <PropertyListings />
        </SmoothScrollWrapper>
    )
}

export const dynamic = 'force-dynamic'
