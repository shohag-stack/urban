import React, {useEffect, useState} from 'react'
import {AdvancedMarker, Map, InfoWindow, useMap} from '@vis.gl/react-google-maps';
import Property from '@/public/types/types';
import {MapPinCheckInside} from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
type MapProperty = {
  filteredProperty: Property[]
  hoverProperty: Property | null
}

export default function PropertyMap({filteredProperty, hoverProperty} : MapProperty) {


    const bath = "icon/bath.svg";
    const bed = "icon/bed.svg";
    const mapI = "icon/map.svg";
    const home = "icon/home.svg";
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
    const map = useMap()

  useEffect(() => {
    if (hoverProperty?.coordinates && map) {
      map.panTo({
        lat: hoverProperty.coordinates.lat,
        lng: hoverProperty.coordinates.lng,
      })
      map.getZoom()
    }
  }, [hoverProperty, map])

  return (
        <Map 
          defaultZoom={12} 
          zoom={13}
          defaultCenter={{ lat: 40.7639353, lng: -73.9566 }}
          mapId={'DEMO_MAP_ID'}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
        {
          filteredProperty.map((property, idx)=>{
          const isActive = 
          (hoverProperty && hoverProperty.id === property.id) || 
          (selectedProperty && selectedProperty.id === property.id);

          return property.coordinates && (
                <AdvancedMarker clickable={true} onClick={()=> setSelectedProperty(property)} title={property.title} position={{lat: property.coordinates.lat, lng: property.coordinates.lng}} key={idx}> 
                    <MapPinCheckInside 
                    color={isActive ? "red" : "black"} 
                    size={isActive ? 36 : 24} 
                  />             
                </AdvancedMarker>
              )
          })
        }

        {
          (() => {
            const currentProperty = selectedProperty || hoverProperty;
            return currentProperty && currentProperty.coordinates && (
              <InfoWindow 
                onCloseClick={()=> setSelectedProperty(null)} 
                headerContent={<h6 className="font-semibold mt-2">{currentProperty.title}</h6>} 
                position={{
                  lat: currentProperty.coordinates.lat, 
                  lng: currentProperty.coordinates.lng
                }} 
              >
                    <div className="overflow-hidden flex" key={currentProperty.id}>
                      <Image src={currentProperty.image} alt={currentProperty.title} width={424} height={460} className="w-[70] h-[70] object-cover hover:scale-105" />
                      <div className="px-4 bg-white">
                          <Link href={`/listings/${currentProperty.href || ''}`}>
                          <div className="flex items-center justify-between">
                              <h6 className="text-sm mb-0 px-2 py-2 bg-gray rounded-full">${currentProperty.price}</h6>
                          </div>
                          <div className="property-details flex flex-col gap-3">
                                  <div className="flex justify-between mt-2 ">
                                  <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bed} alt="bed" width={16} height={18} /> <p className="mb-0">{currentProperty.bedrooms} Beds</p></div>
                                  <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bath} alt="bath" width={16} height={18} /> <p className="mb-0">{currentProperty.bathrooms.full} baths</p></div>
                                  <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={home} alt="home" width={16} height={18} /> <p className="mb-0">{currentProperty.area} sqft</p></div>
                                  </div>
                                  <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={mapI} alt="map" width={16} height={18} /> <p className="mb-0">{currentProperty.location}</p></div>
                          </div>
                          </Link>
                      </div>
                </div>
              </InfoWindow>
            )
          })()
        }
      </Map>
  )
}