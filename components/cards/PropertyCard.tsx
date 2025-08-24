import React from 'react'
import Image from 'next/image';
import Property from "../../public/types/types";
import Link from 'next/link';

export interface PropertyCardProps {
  property: Property; 
}

export default function PropertyCard({property} : PropertyCardProps) {

    const bath = "icon/bath.svg";
    const bed = "icon/bed.svg";
    const map = "icon/map.svg";
    const home = "icon/home.svg";
    
    return (
        <Link href={`/listings/${property.href}`}>
        <div className="overflow-hidden h-full bg-white" key={property.id}>
            <div className='overflow-hidden'>
                <Image src={property.image} alt={property.title} width={424} height={460} className="w-full h-[250] object-cover hover:scale-105 transition-all ease-in-out duration-500" />
            </div>
            <div className="p-4 bg-white">
                
                <div className="flex items-center justify-between">
                    <h6 className="font-semibold mt-2">{property.title}</h6>
                    <h6 className="text-md mb-0 px-4 py-2 bg-gray rounded-full">${property.price}</h6>
                </div>
                <div className="property-details flex flex-col gap-3">
                        <div className="flex justify-between mt-2 ">
                        <div className=" text-gray-500 ml-2 flex items-center gap-2"> <Image className=" w-[14] md:w-[20] h-[14] md:h-[20]" src={bed} alt="bed" width={16} height={18} /> <p className="mb-0 text-sm">{property.bedrooms} Beds</p></div>
                        <div className=" text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[14] md:w-[20] h-[14] md:h-[20]" src={bath} alt="bath" width={16} height={18} /> <p className="mb-0 text-sm">{property.bathrooms.full} baths</p></div>
                        <div className=" text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[14] md:w-[20] h-[14] md:h-[20]" src={home} alt="home" width={16} height={18} /> <p className="mb-0 text-sm">{property.area} sqft</p></div>
                        </div>
                        <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[14] md:w-[20] h-[14] md:h-[20]" src={map} alt="map" width={16} height={18} /> <p className="mb-0 text-sm">{property.location}</p></div>
                </div>
            </div>
        </div>
        </Link>
    )
}
