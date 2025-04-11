import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/services',
        destination: '/Main_Service/Services',
      },
      {
        source: '/contact_us',
        destination: '/Main_Contactus/contact_us',
      },
      {
        source: '/blog',
        destination: '/Main_Blog/blog',
      },
    ];
  },
};

export default nextConfig;
