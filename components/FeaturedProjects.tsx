import property from "../public/Data/property";
import Image from "next/image";
import PropertyCard from "./cards/PropertyCard";
export default function FeaturedProjects( {title} :{title:string | null}) {
    
    const featuredProperties = property.slice(0, 3); // Get the first 3 properties for featured projects
    return (
        <>
            <div className="bg-gray">
                <div className="section">
                    <div className="text-center mb-10">
                        <h3>{title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            featuredProperties.map((property, idx)=> {
                                return (
                                    <PropertyCard key={idx} property={property} />
                                )
                            })
                        }
                    </div>
            </div>
            </div>
        </>
    )
}