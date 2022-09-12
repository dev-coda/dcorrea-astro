---
layout: "../../layouts/BlogPost.astro"
title: "Creating a simple blog with Astro"
description: "Astro.build lives up to the hype."
pubDate: "Sept 10 2022"
heroImage: "/space.png"
prompt: "Retro sci-fi hyper-realistic art dreamscape space futuristic planet on the horizon of a landscape"
stackIcons: ["vscode-icons:file-type-astro", "vscode-icons:file-type-reactts",vscode-icons:file-type-tailwind,"vscode-icons:file-type-html", "vscode-icons:file-type-css", "vscode-icons:file-type-typescript-official"]
---

I've wanted to start a blog for a while. However, the issue for me was always the hassle. When I first started this website, I wanted to practice React.js, since I've worked mainly on private projects, and I don't have much in the way of a public portfolio. So a blog was on the roadmap.

The project becomes over complicated for the intended scope, as I would need to deal with integrating a CMS. Then, you start running into some issues. For static content, the SPA approach is overengineered. Also, it makes sense to think about SEO and React by itself is pretty bad in that regard. So you need to use some sort of SSR or SSG framework. Next thing you know, you are stuck setting up a Strapi deployment and figuring out how to write MDX and make it work with GraphQL on Gatsby, or something like that. And as 3am hit and I’m debugging some obscure issue I would wonder why I’m not using Wordpress.

I'm exaggerating, of course, that approach is well and good, but not what I wanted. Then I started looking into some sort of MPA framework, but again, at this point for me to learn Eleventy, Hugo, or something like that seemed like overhead I didn’t have the time to tackle.
Also, I already had a React website, and migrating seemed like a pain, and I would lose a couple of cute things I did, like the typewriter effect on the main Hero.

Enter Astro.
I’m wary of jumping into “the next big thing”, since I would rather spend the time getting better or doing interesting stuff in tried and true frameworks, but Astro promised a lot and I kept hearing only praises for it. So I gave it a try, and a few days later I had already built my blog. I was impressed. 

## Installation

I won’t cover the actual process, since it’s better to go directly to [astro.buid](https://astro.build), but I can say, the installation is painless. Since under the hood, Astro uses Vite, everything here feels snappy. They have some templates, and I used the Blog template, to save some time.

You end up with a simple folder structure, the routing is directory based, like Next.js, and you only need to add any “Integrations” you need. There’s a few that seem like a must, like astro/image, and astro/compress.

After installing them, you can get to work.

As simple as
```js
$ npm create astro@latest
$ npx astro add react tailwind image compress
```

## Syntax

It’s clear they take inspiration from React. The syntax is very much like JSX, to an extent, but the file structure is something I loved.

Any imports or code you need to run live inside some “frontmatter” tags in the .astro document. Then you can simply write your HTML like it’s 1999, with the added benefit of using dynamic values, variables, flow control and array methods in your markdown.

After that, you can write some style tags, and dump your css there, or even scss if you enable it. Another option for styles, is using general global stylesheets (Not that I would recommend it), or what I ended up doing, using Tailwind. 
Then, you can do some script tags if you need inline js code to have access to the document or window, and we’re done.

## I’m an Island boy

But what about the islands?

The magic of Astro is its ability to load as much as possible as static HTML and CSS and ship just the needed Js code, which of course greatly reduces the bundle size. That idea of Island architecture (Don’t know who coined the term) is that you can isolate any dynamic or reactive components in an island, and ship only tree-shaken minified Js. Also, you can run most frontend frameworks as islands. That 's incredible. You could use components from Vue, Svelte, React, etc. in the same page, with minimal overhead. Why would you do that, I don't know, but you could.

To begin with, I just pasted my react components, imported the react integration, and everything worked with no fuss. Wow. Then, I decided I would actually rewrite them as astro components, leaving only the ones that needed access to State or React as they were.

In the end, I realized I was using very little code that needed React, and what I was using was not fancy at all, so I tried using Preact instead. The integration and the preact/compat package worked like a charm, and I could use the typewriter npm package without issue. 

## Developer Experience

Astro is fast. The hot reloads and the web server are a delight to use, the errors are wonderfully verbose, and the final product it’s pretty compact. Without deep diving into perf, you end up with a performant site, that feels a lot like writing those simple HTML websites you do in bootcamps, but with all the quality of life improvements that a modern framework needs. It's the right amount of magic to feel great to use, but avoid a lot of the boilerplate and bias that comes with frontend frameworks.

## The bottom line
At this point, I really like Astro. It’s by far the most ergonomic migration I have ever done, and I’m excited to keep exploring it. However, as a young project, I would be wary to use it in production, as usually there’s a lot of breaking changes, and you end up needing to jump through some hoops if you need specific packages or integrations. It’s pretty nifty, anyway, and I’m excited to go along for the ride as the project matures.
