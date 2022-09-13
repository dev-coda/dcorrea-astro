---
layout: "../../layouts/BlogPost.astro"
title: "Router transitions to avoid FOUC with Astro"
description: "Smooth transitions for your MPA"
pubDate: "Sept 12 2022"
heroImage: "/spaceport.webp"
prompt: "starship traveling through computer code"
stackIcons: ["vscode-icons:file-type-astro","vscode-icons:file-type-html","vscode-icons:file-type-css","vscode-icons:file-type-js-official"]
---

After deploy, I noticed the transitions for my website were pretty janky. Some content would appear and disappear, but the worst of it were fonts and styles. It's not the first time I've faced this issue, but it's the first time I've had to deal with it in Astro.

## What is FOUC?

Flashes of unstyled content, or FOUC, is when a page loads and the content is visible before the styles are applied. This is a common issue with single page applications, and it's a problem I've had to deal with before. There are several approaches to solve it, but most of them rely on the same principle: Make sure the content is loaded after the styles.

## First approach: Optimization

Depending on your setup, you might be able to solve this issue by optimizing your stylesheets. If the file is small enough, and is served fast (via a CDN for example, or with good caching) you might avoid FOUC. This is very much alike inlining CSS, or putting it in the `<head>` tag. However, this is not a good solution for a few reasons:
* It relies on a race condition: Surely most of the time your CDN can serve 20kb of Css code and fonts faster than your bundle, but maybe at some point it won't and you have zero control on that process.
* It's not future proof: As the project grows, the CSS file will grow and the problem will come back. This is even more evident if your font stack grows too.
* It doesn't solve the problem: It just makes it less likely to happen. If you have a slow connection, or a slow server, you might still see the FOUC.

## Second approach: Magic

This is what happens when you use a framework like Next.js or Gatsby. They have a built-in solution to this problem. That can be related to preloading static resources, inlining CSS automatically, or the "sealing" of CSS Sheets. In Next.js, for example, you can include some boilerplate to make sure the styles are loaded before the content, using getInitialProps. This is very fancy, but bottom line, ensures the styles are rendered on the server and loaded on the client before the content. This kind of approach is very framework specific, and it's not something you can do with Astro, at least to my knowledge.

## Third approach: Deferring

Using various methods, you can defer the content load until the styles are loaded. This is easy, and it works, but it's not the best, because you are artificially delaying the content load. The most egregious example of this is using timeouts, but it can be done properly.

## Fourth approach: The usual way

This is very simple. Do not mess with deferring code. Load everything as it comes, but make all the content invisible by default (with `display: none` or `visibility: hidden` for example). Then, when the styles are loaded, using an event listener, make the content visible. This is a best of all worlds approach, because it's simple, and fast.

Something like this:

```html
<style type="text/css">
  .no-fouc {display: none;}
</style>
<body class="no-fouc">
</body>
```

And then, in your JS:

```js
window.onload = function() {
            document.querySelector('.no-fouc').element.classList.remove("no-fouc");;
        }
```

## Fifth approach: The dreaded spinner

The more common fix for this problem is to use a spinner, or some sort of transition animation. This is usually overused for async content in javascript frameworks, but it's a good solution for this problem. The idea is to show a transition animation until the styles are loaded. Considering the static nature of my content, a simple fade-in animation is enough, specially considering I was missing the smoothness of the SPA transitions in my MPA website.

## How to do it in Astro

Fortunately, Julian Cataldo made a very useful little plugin in [@julian_cataldo/astro-transition](https://www.npmjs.com/package/@julian_cataldo/astro-transition).

It relies on the browser router, but gives a very smooth snappy fade transition without much overhead.

To use it, just install it:

```bash
$ npm install @julian_cataldo/astro-transition
```

Then, in your templates or pages, you can use the `Transition` component just below the `body` tag:

```astro
---
@import { Transition } from '@julian_cataldo/astro-transition/Transition.astro'
---
<body>
 <Transition speed={500} background='white' zIndex={1000} />
 <Content/>
 </body>
```

It's quite important to realize that the `Transition` component and import differ from the one in the documentation. Seems like the author is still working on it, but it's already very useful.

## Conclusion
Astro-transition is a very nifty package to bring back some of the SPA UX to your Astro MPA website. 