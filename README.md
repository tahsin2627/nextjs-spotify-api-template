# Next.js Spotify API Template

This is a Next.js template project designed to interact with the Spotify API and Web Playback SDK. It includes TypeScript types and fetch actions related to the Spotify API, making it easier to build applications that require Spotify data. I wanted to build my own Spotify clone using NextJS but wasn't able to find a suitable template, so here it is !

## Features

- **Next.js**: A React framework for building server-side rendered applications.
- **TypeScript**: Strongly typed JavaScript for better code quality and developer experience.
- **Spotify API Integration**: Predefined types and fetch actions to interact with the Spotify API and Web Playback SDK.
- **NextAuth**: A strong authentication service for Next.js with support for Spotify.
- **TailwindCSS**: A utility-first CSS framework for building custom designs quickly and efficiently.
- **shadcn/ui**: An awesome component library made using TaildwindCSS. Feel free to bring your own.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later) or [pnpm](https://pnpm.io/) (v6 or later) or [Bun](https://bun.sh/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/CyprienDeRoef/nextjs-spotify-api-template
cd nextjs-spotify-api-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Spotify API Setup

To use the Spotify API, you need to set up your Spotify Developer account and obtain the necessary credentials:

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and log in.

2. Create a new application to get your Client ID and Client Secret.

3. Create a `.env.local` file in the root of your project and add your credentials:

```
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
```

### Fetching Data from Spotify API

This template includes predefined fetch actions to interact with the Spotify API. You can find these actions in the `lib/spotify` folder. Here's an example of how to fetch a user's playlists:

```typescript
import { getUserPlaylists } from "./lib/spotify";

const playlists = await getUserPlaylists();
console.log(playlists);
```

### Using shadcn/ui

This template comes with an optional components library: [shadcn/ui](https://ui.shadcn.com/docs). Unlike many components library, shadcn/ui allows you to fully custom your components by placing them in a `components/ui` folder instead of the usual `node_modules`, granting you access to all properties. Here's an exemple of how to create a Card :

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about the Spotify API and Web Playback SDK, check out these resources :

- [Spotify for Developers](https://developer.spotify.com/documentation/web-api) - find everything you need about Spotify API endpoints.
- [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk) - learn how to stream and play Spotify music in your own app.

To learn more about shadcn/ui, visit the [shadcn/ui](https://ui.shadcn.com/docs) documentation.

## Comment

Hi, I'm Cyprien De Roef and I'm a student developper for 8 months now. I'm doing my best here to provide something useful, but I may have some inconsistencies lying around. I made this repo public in the hope it will be used but I would also appreciate if you suggest any improvements or PR you would find interesting. On the same note, if you see any mistake feel free to inform me. In the meantime, enjoy ! :)
