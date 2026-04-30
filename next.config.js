import { hostname } from "os";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.lummi.ai",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "res.cloudinary.com"
      }
    ],
  },
};

export default nextConfig;
