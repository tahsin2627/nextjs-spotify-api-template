"use client";

import React, { createContext } from "react";
import Playlist from "@/lib/types/Playlist";

export const UserPlaylistsContext = createContext();

export default function UserPlaylistsProvider({ children, userPlaylists }: { children: React.ReactNode; userPlaylists; }) {
    return (
        <UserPlaylistsContext.Provider value={ userPlaylists }>
            { children }
        </UserPlaylistsContext.Provider>
    );
}