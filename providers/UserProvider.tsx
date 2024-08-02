"use client";

import React, { Context, createContext } from "react";
import User from "@/lib/types/User";

export const UserContext: Context<User> = createContext({} as User);

export default function UserProvider({ children, user }: { children: React.ReactNode; user: User; }) {

    return (
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>
    );
}