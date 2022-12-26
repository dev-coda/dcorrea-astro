---
layout: "../../layouts/BlogPost.astro"
title: "Building a Fintech on NextJs"
description: "Using NextJs to deliver a performant and scalable product."
pubDate: "Dec 01 2022"
heroImage: "/money.jpeg"
prompt: "digital money landscape"
stackIcons: ["logos:nextjs-icon", "logos:vercel-icon"]
---

In 2022, I spent a lot of time building website for a local Fintech company. This is the first of a few posts detailing my process and the tools I used to build the site.

## The Problem

The client, wanted to showcase the product. This project started in Q4 of 2021, and the initial idea was to use an off-the-shelf solution to handle the business logic, and have a basic marketing website to get and track leads.

The client had a few requirements:

- They needed an extensive form to collect information from potential customers. The form had about 20 fields, and some of them were conditional. Ideally, we would be able to upload personal documents (ID), proof of address, etc) and have the form validate them.
- The form needed to send emails to the user and the company with the information they entered.

## Before anything else, a step back

Upon receiving these requirements, our agency had a few questions:

- What is the business model of the company?
- What is the product?
- What is the target audience?
- What is the conversion funnel?

The answers to these questions would help us determine the best way to build the site. In our experience, when the client has clear requirements but not a clear vision of the product, it is best to start with a prototype. This way, we can test the product with real users and iterate on it.
Over time we have found that building solutions to fulfill requirements without a clear understanding of the client's business model is a bad idea on the long run.
In my opinion, for projects like this one, a client requesting a website is a red flag. The client should be requesting a product, not a website. A website is a tool to deliver a product, not the product itself. Ideally, the client should have a clear understanding of the product they want to deliver, and we would design a website around the specific needs to help them achieve their business goals.

## The Prototype

For any project that has low technical requirements and needs a fast MVP, I consider Wordpress to be a good option. It is easy to use, and it has a lot of plugins that can help you build a website quickly. Done well, it can perform fine, and it is easy to maintain. The devil, as always, is in the details. Wordpress is not a good option for projects that need a lot of customization, or that need to be extremely performant. It is also not a good option for projects that need to be scalable.

So our design team build a prototype in figma and we build a simple blog in Wordpress. There was some work integrating the forms plugin we used with a mailing service, but overall it was a pretty straightforward project.

## V1 - The actual requirements come up

The site was up and getting leads, connected to Mailchimp and Google Analytics.

After a few weeks, the client came back with a few changes to the requirements. They wanted to add a few more fields to the form, and they wanted to add a few more pages to the site. So far so good. Also, they wanted to save the forms results on the site and were planning to add a propietary API to handle business logic in the future. This is where things started to get complicated. They also needed a loan calculator to help users estimate the cost of a loan.

At this stage, we had a few options:

- Use Wordpress and add the new features to the existing site.
- Use a static site generator like Gatsby or NextJs.

Now, we have plenty of experience with clients that begin with a simple marketing site in wordpress, start requesting and implementing new features, and end up with a bloated and unmaintainable site. And the larger the project becomes, the harder it is to stop and refactor the code.

Over meetings with our manager, I floated the idea of handling the business logic ourselves, and moving the project over to a static site generator. The client was open the idea, but short term they wanted to keep the Wordpress site. So we shelved the API and got to work on the loan calculator.

## V1.5 - The Wordpress site is ready...

We built the loan calculator in vanilla JS. At this point we were getting some promising growth, but the lead quality was lacking. We needed to do what we could regarding segmentation and personalization, but we needed tools to identify the users and profile them.

The client finally authorized us to handle the business logic ourselves, and we started designing the API.
The general requirements were:

1. The user finds the site.
2. The user uses the loan calculator to estimate the cost of a loan.
3. The user fills out the form.
4. Our backend validates the form and saves the data to the database.
5. In the backend, using propietary tools, we calculate the user's score.
6. Using the score, we decide if the user qualifies for a loan.
7. If the user qualifies, we send the user an email with the loan offer.
8. If the user does not qualify, we send the user an email with a rejection letter.

I was in tech lead for the project and had to decide the tech stack. My main concern was scalability. I wanted to build a solution that could handle a lot of traffic, and that could be easily scaled. I also wanted to build a solution that could be easily maintained by other developers and didn't rely on third party plugins and tools to perform.

After a lot of meetings, I proposed NextJs for the frontend and NodeJs for the backend. We would use Express for the backend, and MongoDB for the database. We would use Vercel for hosting and deployment of the NextJs site, and a DigitalOcean Droplet for the backend.

Now, why would we use Node instead of Next API routes? Well, at the time the client was adamant on us hosting our own database. We would build a admin panel on the backend server using Pug, and the client would be able to manage the database and the API. Internally I had concerns about database connection pooling. We also knew eventually we would add authentication to the admin panel, and we would need to handle sessions.

## Building the Next Js site.

This is the end of part 1. In the next post I will talk about the challenges we faced building the NextJs site, and how we overcame them. Eventually we grew and matured the site, integrated a lot of tools, and built a lot of features. I will go a little more in depth regarding what we did in NextJs. For now, I hope you enjoyed this post. If you have any questions, feel free to reach out to me.
