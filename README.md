# Next.js Spotify API Template

This is a Next.js template project designed to interact with the Spotify API. It includes TypeScript types and fetch actions related to the Spotify API, making it easier to build applications that require Spotify data.

## Features

- **Next.js**: A React framework for building server-side rendered applications.
- **TypeScript**: Strongly typed JavaScript for better code quality and developer experience.
- **Spotify API Integration**: Predefined types and fetch actions to interact with the Spotify API.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later) or [pnpm](https://pnpm.io/) (v6 or later) or [Bun](https://bun.sh/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/CyprienDeRoef/NextJSTemplateSpotifyAPI
cd NextJSTemplateSpotifyAPI
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

You can start editing the page by modifying `app/page.tsx.` The page auto-updates as you edit the file.

### Spotify API Setup

To use the Spotify API, you need to set up your Spotify Developer account and obtain the necessary credentials:

- Go to the Spotify Developer Dashboard and log in.

- Create a new application to get your Client ID and Client Secret.

- Create a `.env.local` file in the root of your project and add your credentials:

```
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
```

### Fetching Data from Spotify API

This template includes predefined fetch actions to interact with the Spotify API. You can find these actions in the lib/spotify.ts file. Here's an example of how to fetch a user's playlists:

```typescript
import { getUserPlaylists } from "./lib/spotify";

const playlists = await getUserPlaylists();
console.log(playlists);
```

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about the Spotify API, check out the [Spotify for Developers](https://developer.spotify.com/documentation/web-api) documentation.
