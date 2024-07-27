import type { Metadata } from "next";
import * as icons from "lucide-react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Card, CardHeader } from "@/components/ui/card";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotifyer",
    description: "Listen to Spotify and generate new playlists",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={ `dark !p-6 !max-h-screen flex flex-col gap-6 ${inter.className}` }>
                <Header />
                <main className="flex gap-6 h-full">
                    <Library />
                    { children }
                </main>
                <MusicPlayer />
            </body>
        </html>
    );
}
