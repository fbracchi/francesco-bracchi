import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://francescobracchi.it',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'never'
});
