import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Automatically uses SITE_URL environment variable, or falls back to your current live deployment.
// When you buy your custom domain, simply update the default URL below.
export default defineConfig({
  site: process.env.SITE_URL || 'https://imagesqueeze.siyamxe.workers.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
