/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permit this explicitly named private-network host to request dev-only assets.
  // Additional hosts can be supplied with CARBONM_DEV_ORIGIN at runtime.
  allowedDevOrigins: ["172.20.29.171", ...(process.env.CARBONM_DEV_ORIGIN ? [process.env.CARBONM_DEV_ORIGIN] : [])],
  images:{formats:["image/avif","image/webp"]},
  async redirects(){return [
    {source:"/technology/alkanalyze",destination:"/technology/yieldboost",permanent:true},
    {source:"/technology/oleum-v1",destination:"/technology/magnet",permanent:true}
  ];}
};
export default nextConfig;