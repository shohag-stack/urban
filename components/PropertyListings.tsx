import { Suspense } from "react"
import ListingsContent from "./ListingsContent"
import PropertyListingsLoading from "./PropertyListingsLoading"
export default function PropertyListings() {
  return (
    <Suspense fallback={<PropertyListingsLoading/>}>
      <ListingsContent />
    </Suspense>
  )
}