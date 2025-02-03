/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint ko build ke dauran ignore karne ke liye
  },
};

export default nextConfig; // module.exports ke bajaye export default use karein
