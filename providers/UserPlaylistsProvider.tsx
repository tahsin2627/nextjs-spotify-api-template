"use client";

import React, { Context, createContext, ReactNode } from "react";
import { Paging, SimplifiedPlaylist } from "@/lib/types";

export const UserPlaylistsContext: Context<Paging<SimplifiedPlaylist>> = createContext({} as Paging<SimplifiedPlaylist>);

export default function UserPlaylistsProvider({ children, userPlaylists }: { children: ReactNode; userPlaylists: Paging<SimplifiedPlaylist>; }) {
    return (
        <UserPlaylistsContext.Provider value={ userPlaylists }>
            { children }
        </UserPlaylistsContext.Provider>
    );
}