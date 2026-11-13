/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{formats:["image/avif","image/webp"]},
  async redirects(){return [
    {source:"/technology/alkanalyze",destination:"/technology/yieldboost",permanent:true},
    {source:"/technology/oleum-v1",destination:"/technology/magnet",permanent:true}
  ];}
};
export default nextConfig;