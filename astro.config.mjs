import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: vercel(),
  server: (command) => ({ port: command === 'dev' ? 4231 : 4000, host: true })
});
