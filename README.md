# 2140 Website

The official website for 2140, built with [Next.js](https://nextjs.org) (App Router) and [Sanity](https://sanity.io) as the CMS. Content is managed through Sanity Studio, which is hosted on its own URL. The site is deployed on Netlify.

The frontend is built using React + Typescript and Tailwind.

## Getting started

Copy the env file and fill in the values from your Sanity project and Netlify:

```bash
cp .env.example .env.local
```

Make sure you're running Node 22. If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), run the following to switch to the correct version automatically (a `.nvmrc` is included):

```bash
nvm use   # or: fnm use
```

To install all dependencies and view the app locally run:

```bash
npm install && npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Sanity

Sanity is a headless, open-source CMS — it stores and serves content (text, images, structured data) via an API, separate from the frontend. Content lives in Sanity's hosted **Content Lake** and is fetched by Next.js at build time or on demand via GROQ queries.

**Sanity Studio** is the editing interface. It's hosted on its own URL and connects to the same Content Lake. Editors use it to create and publish content, and changes are reflected on the site without a full rebuild via Incremental Static Revalidation.

The schemas in `/sanity/schemas` define the shape of all content types. When schemas or queries change, run `npm run typegen` to keep TypeScript types in sync.

To access Sanity locally run:

```bash
npm run studio
```

The studio runs at [http://localhost:3333](http://localhost:3333).

To regenerate TypeScript types after editing any GROQ queries or Sanity schemas:

```bash
npm run typegen
```

After merging schema changes into `main`, the Studio needs to be redeployed to reflect them for editors. You can do via the Sanity CLI. Run the following from the `sanity/` directory:

```bash
cd sanity && sanity deploy
```

This pushes the updated Studio to Sanity's hosting at the URL defined by `SANITY_STUDIO_HOST` in your `.env`.

## Folder structure

```
app/              # Next.js App Router — pages, layouts, API routes
components/
  shared/         # Reusable UI components
  slices/         # Page section components driven by Sanity content
  templates/      # Page-level layout templates
contexts/         # React context providers
utils/              # Utility functions (metadata, links, markdown, etc.)
public/           # Static assets (images, favicon)
sanity/           # Sanity Studio config, schemas, and helpers
  schemas/        # Content type definitions
  plugins/        # Sanity plugin configuration
types/            # Shared TypeScript types
```

## Useful commands

| Command              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start the local dev server                      |
| `npm run build`      | Build for production                            |
| `npm start`          | Run the production build locally                |
| `npm run studio`     | Start Sanity Studio locally                     |
| `npm run typegen`    | Regenerate TypeScript types from Sanity schemas |
| `npm run lint`       | Run ESLint                                      |
| `npm run type-check` | Run TypeScript type checking                    |
| `npm run validate`   | Run lint and type checking together             |
