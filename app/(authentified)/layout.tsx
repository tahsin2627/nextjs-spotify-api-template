import type { Metadata } from "next";
import * as icons from "lucide-react";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import { Card, CardHeader } from "@/components/ui/card";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotifyer",
    description: "Listen to Spotify and generate new playlists",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="max-h-[100vh] grid grid-rows-[auto_1fr_auto] gap-4">
            <Header />
            <main className="flex gap-4 w-full">
                <Library />
                { children }
            </main>
            <MusicPlayer />
        </div>
    );
}
