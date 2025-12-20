/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: false,
  experimental: {
    optimizeCss: false, // Try disabling CSS optimization
  },

  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      // Add other image hosts if needed
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
