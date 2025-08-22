export default interface Property {
  id: number;
  title: string;
  href: string;
  description: string;
  image: string;
  price: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: {
    full: number;
    half: number;
  };
  area: string;
  type: string;
  transaction_type: string;
  tags: string[];
  features: {
    interior: {
      elevator: string;
      area: string;
      livable: string;
    };
    security: {
      name: string;
      region: string;
      sub_division: string;
    };
    hoa: {
      hasHoa: boolean;
      fee: string;
      services: string[];
    };
  };
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}