// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({

  base: process.env.NODE_ENV === 'production' ? '/elbailon' : '/',
  site: 'https://Oconcejero.github.io',
  trailingSlash: 'always',
});