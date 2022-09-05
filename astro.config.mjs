import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from 'astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import storyblok from '@astrojs/storyblok';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), tailwind(), storyblok({
		accessToken: "To2THN2L0JymhIMDLO6fbgtt",
		components: {
		  page: "storyblok/Page",
	  feature: "storyblok/Feature",
	  grid: "storyblok/Grid",
	  teaser: "storyblok/Teaser",
		}
	  }),],
});
