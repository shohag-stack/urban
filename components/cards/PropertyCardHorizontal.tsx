import React, { useState } from 'react'
import Image from 'next/image';
import Property from "../../public/types/types";
import Link from 'next/link';

export interface PropertyCardProps {
    property: Property;
    hoverProperty: (property: Property | null) => void
}

export default function PropertyCardHorizontal({ property, hoverProperty }: PropertyCardProps) {

    const bath = "icon/bath.svg";
    const bed = "icon/bed.svg";
    const map = "icon/map.svg";
    const home = "icon/home.svg";
    const [active, setActive] = useState(false)

    return (
        <div className={`overflow-hidden flex ${active ? "bg-amber-50" : "bg-white border-none"} items-center`} key={property.id}
        
        onMouseEnter={() => {
            hoverProperty(property);
            setActive(true);
        }} 
        onMouseLeave={() => {
                hoverProperty(null);
                setActive(false);
            }} >
            <div className='px-2 py-2'>
                <Image src={property.image} alt={property.title} width={200} height={200} className="w-[260] h-[200] object-cover hover:scale-105" />
            </div>
            <div className="p-4">
                <Link href={`/listings/${property.href}`}>
                    <div className="items-center justify-between gap-6">
                        <h6 className="text-xl mb-0">${property.price}</h6>
                        <h6 className="font-semibold mt-2 items-start">{property.title}</h6>

                    </div>
                    <div className="property-details flex flex-col gap-3">
                        <div className="flex justify-between mt-2 ">
                            <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bed} alt="bed" width={16} height={18} /> <p className="mb-0">{property.bedrooms} Beds</p></div>
                            <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bath} alt="bath" width={16} height={18} /> <p className="mb-0">{property.bathrooms.full} baths</p></div>
                            <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={home} alt="home" width={16} height={18} /> <p className="mb-0">{property.area} sqft</p></div>
                        </div>
                        <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={map} alt="map" width={16} height={18} /> <p className="mb-0">{property.location}</p></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
