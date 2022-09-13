---
layout: "../../layouts/BlogPost.astro"
title: "Deploying an Astro site on Vercel"
description: "As simple as it can be."
pubDate: "Sept 05 2022"
heroImage: "/spaceship.webp"
prompt: "scifi spaceship traveling realistic universe planets stars painting"
stackIcons: ["vscode-icons:file-type-astro", "logos:vercel-icon"]
---

When you're ready to deploy your Astro site, you can do so with a single command using Vercel. No configuration needed. This is a far call from the days of having to configure your own server and deploy your site manually, as I was doing with my first website.
However, if you want to configure your own server, you can do so with Astro's [built-in support for Node.js](https://docs.astro.build/en/guides/integrations-guide/node/).

Initially, that was my intention. I have a soft spot for tweaking nginx, and I wanted to learn how to deploy Astro as a Node.js app on a server. But I quickly realized that I was spending too much time on the deployment process, and not enough time on the actual content of my website. So I decided to use Vercel, and I'm glad I did. However, I still wanted to write a small guide, because I encountered a few issues when I was deploying my site, and I want to help others avoid them.

## Before we start, why choose Vercel?

Vercel is a cloud platform for static sites and Serverless Functions. It's a great choice for deploying Astro sites because it's fast, secure, and easy to use. It's also free for small projects, and you can upgrade to a paid plan if you need more features. I've used Vercel extensively for my professional projects, and I've never had any issues with it. But I had never experimented their free plan. I was expecting to be limited in some way, but I was pleasantly surprised to find that it's actually pretty powerful.

Turns out, as of now, most of the cloud hosting platforms offer a very generous free plan (except Heroku). So I was picking between Vercel, Rendr, and Netlify. I chose Vercel because I was already familiar with it, and in my experience the costumer support is excellent. 

## Deploying your Astro site on Vercel

In principle, it's pretty easy. You just need to create a new project on Vercel, and link it to your GitHub repository. But there are a few things you need to know before you start. Astro can be configured to serve Static pages (SSG) or Server-Side Rendered pages (SSR). If you want to deploy your site as a static site, you need to make sure that you have the `output` property set to `static` in your `astro.config.mjs` file. If you want to deploy your site as a Server-Side Rendered site, you need to make sure that you have the `output` property set to `server` in your `astro.config.mjs` file. If you don't set this property, Astro will default to `static` mode.

What's the difference? With SSR, you can render the JavaScript code on the server and send indexable HTML to the user. The HTML is generated during runtime so that it can reach search engines and users at the same time. With SSG, the HTML is generated during build time. SSG websites are extremely fast, but by design they are not suitable for dynamic content. If you want to deploy a dynamic website, you need to use SSR. If you want to deploy a static website, you can use either SSG or SSR.

## Deploying a static site

This is the default, and since Vercel added support for Astro, you don't need to do anything. Just create a new project on Vercel, and link it to your GitHub repository. Vercel will automatically detect that you're using Astro, and it will build your site. You can then access your site at the URL provided by Vercel, and you can even add your own domain name. 

If you find your site is getting a 404 error, it's a known bug. Simply add to the root of your project a file named vercel.json with the following content:

```json
{
  "cleanUrls": true
}
```

## Deploying a Server-Side Rendered site

This takes a couple more steps. First you need to add the vercel adapter with the following command:

```bash
$ npx astro add vercel
```
Then you can start a new project on Vercel, and link it to your GitHub repository.

The template I was using had the `output` property set to `static` by default. So I had to change it to `server` in my `astro.config.mjs`. I you don't have `output` set on your `astro.config.mjs`, the adapter will add it for you set to `server`.

Here's the full `astro.config.mjs` file:

```js  
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://dcorrea.co",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    preact({
      compat: true,
    }),
    image(),
    compress(),
  ],
  output: "server",
  root: "./",
  adapter: vercel(),
});
```

However, I decided to revert to the default `static` mode, because my website will be largely static, and in the current implementation it's fine since the blog posts are rendered at build time. If I eventually migrate to a CMS, I will need to switch to `server` mode.

To revert, simply change the `output` property from your `astro.config.mjs` file to `static`, and remove the `adapter` property. Don't forget to delete the import for the adapter as well. Then you can run:


```bash
npm uninstall @astrojs/vercel
``` 


## Conclusion
This new wave of tools is making it easier than ever to build websites. I'm really excited about the future of Astro, and I'm looking forward to seeing what the community will build with it. I hope this guide helps you get started with Astro and Vercel.