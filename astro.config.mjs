import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import image from '@astrojs/image';
import lit from '@astrojs/lit';

import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), partytown(), image(), lit(), prefetch(), sitemap()],
  output: 'server',
  adapter: vercel(),
});
