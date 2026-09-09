import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rhasan.online',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/preview-'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
