import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain produksi yang sudah dikonfirmasi (tanpa slash di akhir).
const SITE = process.env.SITE_URL || 'https://batuoutboundmalang.example';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
