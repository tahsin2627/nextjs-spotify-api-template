import type { Metadata } from "next";
import { NextAuthProvider } from "../providers/NextAuthProvider";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <NextAuthProvider>
            <html lang="en">
                <body className={ `!h-screen !w-screen overflow-x-hidden !p-4 ${inter.className}` }>
                    { children }
                </body>
            </html>
        </NextAuthProvider>
    );
}
