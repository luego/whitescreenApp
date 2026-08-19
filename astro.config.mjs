// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://whitescreenapp.online',
  integrations: [alpinejs({ entrypoint: '/src/alpine' }), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});