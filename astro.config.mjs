import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://sherjan.dev',
  server: {
    port: 4321, // o cualquier puerto
    open: true, // abre el navegador automáticamente
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
