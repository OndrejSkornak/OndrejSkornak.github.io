// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ondrejskornak.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Code blocks follow the light/dark theme of the site.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
