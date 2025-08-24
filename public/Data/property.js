const property = [
    {
        id: 1,
        title: "Modern Apartment",
        href: "modern-apartment",
        description: "The Penthouse at Central Park Tower. The One Above All Else. Soaring 1,416 feet above New York City in the tallest residential tower on the planet, the penthouse at Central Park Tower lays claim to the title of being the highest residence—and having the highest terrace—in the world.",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        ],
        price: "1,000",
        location: "Downtown",
        coordinates: { lat: 40.7549, lng: -73.9840 },
        bedrooms: 1,
        bathrooms: { full: 8, half: 3 },
        area: "1000",
        type: "Resident",
        transaction_type: "rent",
        tags: ["Modern Living", "Serene Waterways", "Magnificent Terrace", "Pinnacle of Luxury", "Two Powder Rooms"],
        features: {
            interior: { elevator: "Elevator", area: "Total structure area: 17,545 sqft", livable: "Total interior livable area: 17,545 sqft" },
            security: { name: "Doorman", region: "New York", sub_division: "Midtown" },
            hoa: { hasHoa: true, fee: "$26,952 monthly", services: ["HOA services"] }
        },
        agent: {
            name: "John Doe",
            phone: "123-456-7890",
            email: "john@gmail.com",
            image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=1003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: 2,
        title: "Luxury Penthouse",
        href: "luxury-penthouse",
        description: "Stunning penthouse with panoramic city views and premium amenities. Located in the heart of Manhattan with world-class dining and shopping nearby.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        gallery: [
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

],
        price: "15,000",
        location: "Upper East Side",
        coordinates: { lat: 40.7736, lng: -73.9566 },
        bedrooms: 3,
        bathrooms: { full: 3, half: 1 },
        area: "2500",
        type: "Resident",
        transaction_type: "Buy",
        tags: ["Luxury Living", "City Views", "Premium Amenities", "Prime Location"],
        features: {
            interior: { elevator: "Private Elevator", area: "Total structure area: 2,500 sqft", livable: "Total interior livable area: 2,400 sqft" },
            security: { name: "24/7 Security", region: "New York", sub_division: "Upper East Side" },
            hoa: { hasHoa: true, fee: "$1,200 monthly", services: ["Concierge", "Gym", "Pool"] }
        },
        agent: {
            name: "Sarah Johnson",
            phone: "555-123-4567",
            email: "sarah@realty.com",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: 3,
        title: "Cozy Studio",
        href: "cozy-studio",
        description: "Perfect starter home in vibrant Greenwich Village. Walking distance to parks, cafes, and subway stations.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        gallery: [
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

],
        price: "500",
        location: "Greenwich Village",
        coordinates: { lat: 40.7335, lng: -74.0027 },
        bedrooms: 1,
        bathrooms: { full: 1, half: 0 },
        area: "600",
        type: "Resident",
        transaction_type: "Rent",
        tags: ["Cozy", "Village Life", "Great Location", "Affordable"],
        features: {
            interior: { elevator: "Walk-up", area: "Total structure area: 600 sqft", livable: "Total interior livable area: 580 sqft" },
            security: { name: "Building Super", region: "New York", sub_division: "Greenwich Village" },
            hoa: { hasHoa: false, fee: "$0", services: [] }
        },
        agent: {
            name: "Mike Chen",
            phone: "555-987-6543",
            email: "mike@village-realty.com",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
        }
    },
    // Continue with more properties...
    {
        id: 4,
        title: "Brooklyn Brownstone",
        href: "brooklyn-brownstone",
        description: "Historic brownstone in Park Slope with original details and modern updates. Private garden and parking included.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        gallery: [
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

],
        price: "8,500",
        location: "Brooklyn",
        coordinates: { lat: 40.6782, lng: -73.9442 },
        bedrooms: 4,
        bathrooms: { full: 3, half: 1 },
        area: "3200",
        type: "Resident",
        transaction_type: "Buy",
        tags: ["Historic", "Garden", "Parking", "Family Friendly"],
        features: {
            interior: { elevator: "None", area: "Total structure area: 3,200 sqft", livable: "Total interior livable area: 3,000 sqft" },
            security: { name: "None", region: "Brooklyn", sub_division: "Park Slope" },
            hoa: { hasHoa: false, fee: "$0", services: [] }
        },
        agent: {
            name: "Emily Rodriguez",
            phone: "718-555-0123",
            email: "emily@brooklyn-homes.com",
            image: "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: 5,
        title: "SoHo Loft",
        href: "soho-loft",
        description: "Converted industrial loft with high ceilings, exposed brick, and large windows. Perfect for artists and creatives.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
        gallery: [
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

],
        price: "6,200",
        location: "SoHo",
        coordinates: { lat: 40.7233, lng: -74.0030 },
        bedrooms: 2,
        bathrooms: { full: 2, half: 0 },
        area: "1800",
        type: "Resident",
        transaction_type: "Rent",
        tags: ["Loft Living", "Exposed Brick", "High Ceilings", "Artist Space"],
        features: {
            interior: { elevator: "Freight Elevator", area: "Total structure area: 1,800 sqft", livable: "Total interior livable area: 1,750 sqft" },
            security: { name: "Key Entry", region: "New York", sub_division: "SoHo" },
            hoa: { hasHoa: false, fee: "$0", services: [] }
        },
        agent: {
            name: "David Kim",
            phone: "212-555-7890",
            email: "david@soho-living.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
        }
    }
];

// Generate additional 45+ properties programmatically
const locations = [
    { name: "Midtown", coords: { lat: 40.7549, lng: -73.9840 } },
    { name: "Upper West Side", coords: { lat: 40.7870, lng: -73.9754 } },
    { name: "Lower East Side", coords: { lat: 40.7180, lng: -73.9871 } },
    { name: "Chelsea", coords: { lat: 40.7465, lng: -74.0014 } },
    { name: "Tribeca", coords: { lat: 40.7195, lng: -74.0089 } },
    { name: "Financial District", coords: { lat: 40.7074, lng: -74.0113 } },
    { name: "Williamsburg", coords: { lat: 40.7081, lng: -73.9571 } },
    { name: "Long Island City", coords: { lat: 40.7505, lng: -73.9425 } }
];

const propertyTypes = ["Resident", "Commercial"];
const transactionTypes = ["Buy", "Rent"];
const propertyTitles = [
    "Modern Apartment", "Luxury Condo", "Cozy Studio", "Spacious Loft", "Historic Brownstone",
    "Contemporary Villa", "Urban Penthouse", "Charming Townhouse", "Executive Suite", "Artist Loft"
];

const images = [
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560184897-cca79b749615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707872739532-361b213d1dd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707189855420-0e0e7ba3e384?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664225398704-993a0b392a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

];

const agents = [
    { name: "John Doe", phone: "123-456-7890", email: "john@gmail.com" },
    { name: "Sarah Johnson", phone: "555-123-4567", email: "sarah@realty.com" },
    { name: "Mike Chen", phone: "555-987-6543", email: "mike@village-realty.com" },
    { name: "Emily Rodriguez", phone: "718-555-0123", email: "emily@brooklyn-homes.com" },
    { name: "David Kim", phone: "212-555-7890", email: "david@soho-living.com" }
];

// Generate properties 6-55
for (let i = 6; i <= 55; i++) {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const bedrooms = Math.floor(Math.random() * 4) + 1;
    const price = Math.floor(Math.random() * 20000) + 500;
    const area = Math.floor(Math.random() * 3000) + 500;
    const agent = agents[Math.floor(Math.random() * agents.length)];
    
    property.push({
        id: i,
        title: propertyTitles[Math.floor(Math.random() * propertyTitles.length)],
        href: `property-${i}`,
        description: `Beautiful ${bedrooms}-bedroom property in ${location.name}. Modern amenities and great location with easy access to transportation and local attractions.`,
        image: images[Math.floor(Math.random() * images.length)],
        gallery: Array.from({ length: 10 }, () => images[Math.floor(Math.random() * images.length)]),
        price: price.toLocaleString(),
        location: location.name,
        coordinates: {
            lat: location.coords.lat + (Math.random() - 0.5) * 0.02,
            lng: location.coords.lng + (Math.random() - 0.5) * 0.02
        },
        bedrooms: bedrooms,
        bathrooms: {
            full: Math.floor(Math.random() * 3) + 1,
            half: Math.random() > 0.5 ? 1 : 0
        },
        area: area.toString(),
        type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
        transaction_type: transactionTypes[Math.floor(Math.random() * transactionTypes.length)],
        tags: ["Modern", "Prime Location", "Great Value", "Well Maintained"],
        features: {
            interior: {
                elevator: Math.random() > 0.5 ? "Elevator" : "Walk-up",
                area: `Total structure area: ${area} sqft`,
                livable: `Total interior livable area: ${area - 50} sqft`
            },
            security: {
                name: Math.random() > 0.5 ? "Doorman" : "Key Entry",
                region: "New York",
                sub_division: location.name
            },
            hoa: {
                hasHoa: Math.random() > 0.5,
                fee: Math.random() > 0.5 ? `$${Math.floor(Math.random() * 500) + 100} monthly` : "$0",
                services: Math.random() > 0.5 ? ["Maintenance", "Security"] : []
            }
        },
        agent: {
            name: agent.name,
            phone: agent.phone,
            email: agent.email,
            image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=1003&auto=format&fit=crop"
        }
    });
}

export default property;