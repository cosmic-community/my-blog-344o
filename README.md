# My Blog

![App Preview](https://imgix.cosmicjs.com/b7cfdb30-3f67-11f1-a169-fd69d33cc743-autopilot-photo-1551183053-bf91a1d81141-1776985012058.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern blog built with Next.js 16 and Cosmic CMS. Browse posts, explore authors, and filter by categories.

## Features

- 📝 Blog posts with featured images, tags, and rich content
- 👤 Author profiles with bio and photo
- 🏷️ Category browsing and filtering
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🎨 Optimized images via imgix

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69eaa36d57e3585cfb24438c&clone_repository=69eaa45157e3585cfb2443b2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
> 
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with bucket

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts with author and category
const { objects } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three object types: posts, authors, and categories. Posts have object relationships to authors and categories, loaded via the depth parameter.

## Deployment

Deploy to Vercel or Netlify. Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->