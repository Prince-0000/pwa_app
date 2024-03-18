
/** @type {import('next').NextConfig} */
export const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
  };

  import withPWA from "@ducanh2912/next-pwa";

  const pwaConfig = withPWA({
    dest: "public",
    cacheOnFrontEndNav:true,
    aggressiveFrontEndNavCaching:true,
    reloadOnOnline:true,
    register: true,  
    disable: false,
    workboxOptions:{
        disableDevLogs:true
    }
  }, nextConfig);
  
  export default pwaConfig;
  