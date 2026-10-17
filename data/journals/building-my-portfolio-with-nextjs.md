---

title: "Building My Portfolio with Next.js" date: "2026-10-07" excerpt: "Building my own portfolio has become a practical way to learn Next.js, component design, and the details that make a website feel finished." tags:

- Next.js
- TypeScript
- Web Development

---

## Learning by building something real

I've been building my portfolio with Next.js, and it's been a useful way to turn concepts I've been learning into something tangible.

It's one thing to follow a tutorial and understand what the code is doing. It's another to make your own decisions about structure, components, styling, and how everything fits together.

A portfolio is a particularly good project for this because there isn't just one correct way to build it.

## Thinking in components

One thing I'm getting more comfortable with is breaking the interface into smaller components.

Instead of treating the entire page as one giant piece of JSX, I can separate things like the project list, navigation, and journal into components with their own responsibilities.

TypeScript has also helped me think more carefully about the data flowing between them. Defining the shape of a journal entry, for example, makes it easier to keep the carousel and article modal consistent.

I'm starting to appreciate that good structure isn't about creating the most abstractions. It's about making the code easier to understand and change.

## Making the journal easier to maintain

One decision I've been working through is how to store journal entries.

Keeping everything in a TypeScript data file works, but writing longer articles inside structured objects quickly becomes awkward.

Using individual Markdown files feels more natural. I can write an entry in a format designed for prose, add a little frontmatter for the metadata, and let the application handle rendering it.

It's a small architectural decision, but it makes the process of adding content much simpler.

## The details matter

I've also learned that building a website involves more than getting the main functionality working.

Responsive layouts, keyboard interactions, readable typography, loading behavior, and accessibility all affect how the finished product feels.

There are always more improvements I could make, so I'm trying to focus on changes that make the site clearer and easier to use rather than endlessly tweaking small details.

## An ongoing project

I don't think of this portfolio as something I'll finish once and never touch again.

It's a place to document what I'm learning, experiment with new tools, and show how my thinking changes as I gain experience.

Ideally, the codebase will improve alongside the work it represents.
