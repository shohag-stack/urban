import React from 'react'
import { Search } from 'lucide-react'

export default function SearchInput() {
    return (
        <form className="relative max-w-sm">
            <input className="input-with-button border rounded-none py-4 " placeholder="Search area" type="text" />
            <button className="absolute top-0 bottom-0 right-0 bg-black text-white px-4 cursor-pointer hover:bg-neutral-900"><Search /></button>
        </form>
    )
}
