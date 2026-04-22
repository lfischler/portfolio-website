---
title: "The technical side of building a community data trust prototype"
summary: "A reflective walk-through of building a working community data trust prototype for Hoy and Walls – the architecture, the trade-offs, and the question of who could maintain a tool like this."
image: "/images/grafana.png"
imageAlt: "Screenshot of prototype dashboard"
tech:
  - "Web Development"
  - "Data Engineering"
  - "Docker"
  - "Python"
  - "Grafana"
year: "2024"
collaborators: 
tags:
  - "technical"
---

This is the technical companion to my dissertation project on community data trusts in Hoy and Walls. The research side of the project (what I was trying to find out, what people on the islands made of it, and what I came away thinking) is written up in [Tools, trust, and small places]({{ '/projects/island-data-futures/' | url }}). This one is about what I actually built, the choices that went into it, and what the build itself revealed.

I took the dissertation as an excuse to get my hands properly dirty: to design and deploy a working tool holding real peoples' data, and to think critically about it as I went. The result was a small piece of infrastructure for collecting, storing, and visualising household energy data on Hoy and Walls.

## What I built
Each participant had a monitoring device installed in their meter cupboard (often in a slightly awkward corner of the house). The device read their electricity use and sent it to Efergy's servers. From there:

- A Python script I wrote pulled the readings through Efergy's API and reformatted them for the rest of the stack.
- The TIG Stack did the heavy lifting: Telegraf scheduled the Python script every ten seconds, InfluxDB stored the time-series data, and Grafana handled the dashboards.
- Each component sat in its own Docker container, all hosted on Amazon Web Services.
- For security, I used HTTPS encryption, AWS Secrets Manager for credentials, and individual logins for participants.

Each participant could see two views: a private dashboard showing their own usage, and a shared one showing aggregated consumption across the islands.

## What was hard, and what I learned
The hardest bit was the server infrastructure. I'd never set up a production environment on AWS before, and the gap between "it works on my laptop" and "it works on a server other people are logging into" turned out to be larger than I'd estimated. I leaned heavily on ChatGPT to get through it (this was 2024, when the models were noticeably less capable than they are now), which was genuinely useful – and which is itself part of the story this post is telling. Without that kind of support, the build would have taken much longer or stalled entirely. That tells you something about who can currently build this kind of tool, and what it takes.

## How I made the choices
Every technical decision was a balance between four things:

1. What's free or cheap.
2. What's quickest to learn given a deadline.
3. What a community member might actually choose for themselves.
4. What felt ethical.

Those four don't always pull in the same direction. Grafana, for instance, was the only tool I could find that did what I needed and had enough tutorials online for me to learn it inside the timeframe. Its dashboard modules use a query language called Flux, which I hadn't touched before. I built the dashboards in it anyway, because the alternative was not building them at all.

## The question running underneath
Throughout the build I kept field notes. Not just about what I was doing, but about whether a community organisation could realistically take this on – set it up, maintain it, fix it when something broke. The honest answer most weeks was: not without someone like me sitting alongside them. That observation became one of the more important findings of the wider research. A tool that only its builder can maintain isn't really a community tool, however well-intentioned the build.

I'm pleased with what I made. Building a working, secure, hosted prototype from scratch is a real piece of technical work, and I enjoy this kind of making. The same skills also let me see clearly what the prototype depends on and who it shuts out. Both of those are true at once, and the interesting work sits in holding them together rather than choosing one.