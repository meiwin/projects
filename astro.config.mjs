// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://meiwin.github.io',
  base: process.env.NODE_ENV === 'production' ? '/projects' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});