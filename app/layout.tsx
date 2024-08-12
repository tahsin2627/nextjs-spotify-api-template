/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { NextAuthProvider } from "../providers/NextAuthProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotifyer",
    description: "Listen to Spotify and generate new playlists",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <NextAuthProvider>
            <html lang="en">
                <body className="dark">
                    <div className={ `!h-screen !w-screen overflow-x-hidden !p-4 ${inter.className}` }>
                        { children }
                    </div>
                    <script src="https://sdk.scdn.co/spotify-player.js"></script>
                </body>
            </html>
        </NextAuthProvider >
    );
}
