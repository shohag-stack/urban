import { Suspense } from "react"
import FiltersNav from "./FiltersNav"

export default function PropertyFilters() {
  return (
    <Suspense fallback={<div>Filter is listings...</div>}>
        <FiltersNav/>
    </Suspense>
  )
}
