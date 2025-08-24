'use client'
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import property from "../../../public/Data/property"
import Image from "next/image"
import SideBar from "@/components/SideBar"
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"
import PropertySlider from "@/components/PropertySlider"

export default function Page() {

    const { slug } = useParams<{ slug: string }>()

    const [properties, setProperties] = useState<typeof property[0] | null>(null)

    const bath = "/icon/bath.svg";
    const bed = "/icon/bed.svg";
    const map = "/icon/map.svg";
    const home = "/icon/home.svg";

    useEffect(() => {
        const slugProducts = property.find((item) => item.href === slug) ?? null
       setProperties(slugProducts)
    }, [slug])


    if (!properties) return <h1>Product not found</h1>



    return (
        <SmoothScrollWrapper>
            <div className="bg-gray">
                <div className='section py-2 md:py-10 pb-20'>
                    <div className=" price-info w-full lg:w-1/3 py-5">
                        <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{properties.title}</h4>
                        </div>
                        <div className="property-details flex flex-col gap-3">
                            <div className="flex justify-between mt-2 ">
                                <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bed} alt="bed" width={16} height={18} /> <p className="mb-0">{properties.bedrooms} Beds</p></div>
                                <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={bath} alt="bath" width={16} height={18} /> <p className="mb-0">{properties.bathrooms.full} baths</p></div>
                                <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={home} alt="home" width={16} height={18} /> <p className="mb-0">{properties.area} sqft</p></div>
                            </div>
                            <div className="text-md text-gray-500 ml-2 flex items-center gap-2"> <Image className="w-[20] h-[20]" src={map} alt="map" width={16} height={18} /> <p className="mb-0">{properties.location}</p></div>
                        </div>
                    </div>
                    <div className=" flex flex-col xl:flex-row property-details gap-12">
                        <div className=" w-full lg:w-3/4">
                            <div className="feature-image">
                                <div>
                                    <PropertySlider sliders={properties.gallery}/>
                                </div>
                                <div className="pt-5">
                                    <p className="flex gap-1.5 items-center"><span className="w-4 h-4 rounded-full bg-emerald-400"></span>For sale</p>
                                    <h3>${properties.price}</h3>
                                </div>
                                <div className="special pt-4">
                                    <h5 className="font-normal">What&apos;s special</h5>
                                    <div className="flex flex-wrap gap-2 py-4">
                                        {properties.tags.map((item : string,idx:number)=> (
                                            <button className="btn-secondary font-normal text-sm" key={idx} >  {item} </button>
                                        ))}
                                    </div>
                                    <div className="description py-5">
                                        <p>{properties.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-info">
                                <div className="features">
                                <h5 className="font-normal" >Facts & features</h5>
                                    <div className="interior pt-5">
                                        <div className="pl-5 py-4 bg-white">
                                            Interior
                                        </div>
                                        <div className="features-info flex gap-20 pt-8">
                                            <div className="bedrooms">
                                                <h6 className="text-md pb-2">Bedrooms & bathrooms</h6>
                                                <ul className="flex flex-col gap-2 list-disc pl-4">
                                                    <li className="font-light"> Bedrooms: {properties.bedrooms}</li>
                                                    <li className="font-light"> Bathrooms: {properties.bathrooms.half}</li>
                                                    <li className="font-light"> Full Bathrooms: {properties.bathrooms.full}</li>
                                                </ul>
                                            </div>

                                            <div className="interiors">
                                                <h6 className="text-md pb-2">Interior features</h6>
                                                <ul className="flex flex-col gap-2 list-disc pl-4">
                                                    <li className="font-light"> Interior features: {properties.features.interior.elevator}</li>
                                                    <li className="font-light"> {properties.features.interior.area}</li>
                                                    <li className="font-light"> {properties.features.interior.livable}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                       
                                    <div className="Community pt-10">
                                        <div className="pl-5 py-4 bg-white">
                                            Community & neighborhood
                                        </div>
                                        <div className="features-info flex gap-20 pt-8">
                                            <div className="Security">
                                                <h6 className="text-md pb-2">Security</h6>
                                                <ul className="flex flex-col gap-2 list-disc pl-4">
                                                    <li className="font-light"> Security features: {properties.features.security.name}</li>
                                                    <li className="font-light"> Region: {properties.features.security.region}</li>
                                                    <li className="font-light"> Subdivision: {properties.features.security.sub_division}</li>
                                                </ul>
                                            </div>

                                            <div className="interiors">
                                                <h6 className="text-md pb-2">HOA</h6>
                                                <ul className="flex flex-col gap-2 list-disc pl-4">
                                                    <li className="font-light"> hasHoa:  {properties.features.hoa.hasHoa ? "Yes" : "No"}</li>
                                                    <li className="font-light"> HOA fee: {properties.features.hoa.hasHoa}</li>
                                                    <li className="font-light"> Services included: {properties.features.hoa.services[0]}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        <div className=" w-full lg:w-1/4">
                            <SideBar agent={properties.agent}/>
                        </div>
                    </div>
                </div>
            </div>
        </SmoothScrollWrapper>
    )
}




