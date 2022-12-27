## Astro Implementation of a personal Dev Blog

This project is a reimplementation of the first version of my personal website. v1 used DaisyUI in a React Enviroment.
The current version leverages Astro as a SSR/SSG framework, pulls content from Storyblok, and uses tailwind for Styles. Island interactivity is achieved using preact.

## Why Astro

For a while I wanted to add a blog to my website. I also wanted to showcase SSG/SSR for performance and SEO reasons, since base React is notably bad for SEO.
At the same time, I wanted to migrate from an SPA to an MPA. When the site was first built I prioritized showcasing React as an ability, but since I've come to agree that for this type of content, MPA is usually a better option.
I also wanted to avoid saving mdx files to github and rather wanted to use some sort of CMS.

So, for the framework I considered Gatsby, Next, and SvelteKit. My Svelte proficiency is not something I wanted to improve currently, and Gatsby and Next seemed overcomplicated for the scope of the project. I´ve build sites in both and I knew something simpler would be better. Also, I really wanted to try to build a modern MPA.
Hence, Astro.

As for CMS y considered Headless Wordpress, Strapi, prismic and Storyblok. DX was the deciding factor and I landed on Storyblok. Unnfortunately, the implementation gave me a lot of headaches, so for the moment I'm just using MDX.

## Notes

Currently the project must be run with node 16 (Use nvm if needed). There's also a known issue with astro-icon that requires svgo to be added as a dependency with svgo@2.8.0. The team at astro-icon is working on supporting svgo 3.

Finally, the astro-transition plugin by julian_cataldo has moved, so the dependency must be changed. This is ToDo.
