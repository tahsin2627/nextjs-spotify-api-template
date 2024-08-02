"use client";

import React, { createContext } from "react";
import Playlist from "@/lib/types/Playlist";

export const PlaylistContext = createContext({} as Playlist);

export default function PlaylistProvider({ children, playlist }: { children: React.ReactNode; playlist: Playlist; }) {
    return (
        <PlaylistContext.Provider value={ playlist }>
            { children }
        </PlaylistContext.Provider>
    );
}