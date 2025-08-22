'use client'
// Loading fallback component
export default function PropertyListingsLoading() {
    return (
        <div className='bg-gray'>
            <div className='section pt-10'>
                <div className='flex justify-between items-center py-4'>
                    <div>
                        <h6>Loading properties...</h6>
                        <p>Showing listings marketed by all brokers in the searched area.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {/* Loading skeleton */}
                    {[...Array(8)].map((_, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 animate-pulse">
                            <div className="bg-gray-300 h-48 rounded mb-4"></div>
                            <div className="bg-gray-300 h-4 rounded mb-2"></div>
                            <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}