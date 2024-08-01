"use client";

import React, { createContext } from "react";

export const PlaylistContext = createContext('playlist');

export default function PlaylistProvider({ children, playlist }) {

    return (

        <PlaylistContext.Provider value={ playlist }>
            { children }
        </PlaylistContext.Provider>

    );
}