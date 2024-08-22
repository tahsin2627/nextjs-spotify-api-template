# Next.js Spotify API Template

This is a Next.js template project designed to interact with the Spotify API and Web Playback SDK. It includes TypeScript types and fetch actions related to the Spotify API, making it easier to build applications that require Spotify data.

## Features

- **Next.js**: A React framework for building server-side rendered applications.
- **TypeScript**: Strongly typed JavaScript for better code quality and developer experience.
- **Spotify API Integration**: Predefined types and fetch actions to interact with the Spotify API and Web Playback SDK.
- **NextAuth.js**: A strong authentication service for Next.js with support for Spotify.
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

4. In `.env.local`, add a JWT Secret by choosing a password and configure NextAuth Url:

```
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
JWT_SECRET=mysupersecretpassword
NEXTAUTH_URL=http://localhost:3000
```

### Fetching Data from Spotify API

This template includes predefined fetch actions to interact with the Spotify API. You can find these actions in the `lib/spotify` folder. Here's an example of how to fetch all user's playlists:

```typescript
import { getUserPlaylists } from "@/lib/spotify";
[...]
const playlists = await getUserPlaylists(token, userId);
console.log(playlists);
```

Every Spotify's object type is listed in the `lib/types` folder. It is highly recommanded to use those types to ensure type safety across your project and to have a nice experience developping it. Here's an exemple of how to fetch all user's playlists with type assertion:

```typescript
import { getUserPlaylists } from "@/lib/spotify";
import { Paging, SimplifiedPlaylist } from "@/lib/types";
[...]
const playlists: Paging<SimplifiedPlaylist> = await getUserPlaylists(token, userId);
console.log(playlists);
```

### Playing Spotify Music with Web Playback SDK

This project also integrates the Spotify Web Playback SDK as a `React.ContextProvider` to enable music playback directly within your application and share all its relative states. Note that you **must** have a Premium Spotify account to use this functionnality since Spotify only provides it to its Premium members. Here's how to implement the Spotify Web Playback SDK:

```typescript
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import PlayerProvider from "@/providers/PlayerProvider";
[...]
const session = await getServerSession(authOptions);
return (
    <PlayerProvider token={ session.accessToken }>
      //...
    </PlayerProvider>
)
```

### Building an Interface with shadcn/ui

This template comes with an optional components library: [shadcn/ui](https://ui.shadcn.com/docs). Unlike many components libraries, shadcn/ui allows you to fully custom your components by placing them in a `components/ui` folder instead of the usual `node_modules`, granting you access to all properties. Here's an exemple of how to create a Card:

```tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card';
[...]
return (
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
)
```
Here is an exemple of what you can compose uing shadcn/ui:

![image](https://github.com/user-attachments/assets/0a1a8940-35a4-46c8-a2e8-34b451b10262)

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about NextAuth.js, browse the [NextAuth](https://next-auth.js.org/providers/spotify) documentation.

To learn more about the Spotify API and Web Playback SDK, check out these resources:

- [Spotify for Developers](https://developer.spotify.com/documentation/web-api) - find everything you need about Spotify API endpoints.
- [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk) - learn how to stream and play Spotify music in your own app.

To learn more about TailwindCSS, go to the [TaildwindCSS](https://tailwindcss.com/docs) documentation.

To learn more about shadcn/ui, visit the [shadcn/ui](https://ui.shadcn.com/docs) documentation.

## Comment

Hi, I'm Cyprien De Roef and I'm a student developper for 8 months now. If you're reading this, first of all: thanks! 

I was looking for a Next.js template to start a Spotify clone project and play with their API but I didn't find anything suitable and recent enough to do what I want to do, so I figured I would do it myself and make it public. I made it so in the hope it will be useful for someone, but I would also really appreciate if you suggest any improvement you would find interesting. On the same note, if you see any mistake feel free to inform me. I'm trying my best here to provide something consistant, but I may have some things lying around. In the meantime, enjoy! :)
