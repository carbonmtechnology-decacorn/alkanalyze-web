/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows previewing the dev server from the LAN IP shown by Next.js.
  // If your local IP changes, add the new IP here or remove this line for localhost-only use.
  allowedDevOrigins: ["10.204.43.93"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
