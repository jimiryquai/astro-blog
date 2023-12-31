import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [tailwind()],
  site: 'https://astro-blog-5whi5he0z-jimiryquai.vercel.app/'
});