'use client';

import React, { FC, useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';

interface RecentActivityProps { }

const RecentActivity: FC<RecentActivityProps> = () => {
    // const { data: session } = useSession();
    // const [playlists, setPlaylists] = useState([]);

    // useEffect(() => {
    //     async function fetchPlaylists() {
    //         if (session && (session as any).accessToken) {
    //             const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    //                 headers: {
    //                     Authorization: `Bearer ${(session as any).accessToken}`,
    //                 },
    //             });
    //             const data = await response.json();
    //             setPlaylists(data.items);
    //         }
    //     }
    //     fetchPlaylists();
    // }), [session];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            { Array.from({ length: 12 }).map((_, index) => (
                <Button key={ index } variant="ghost" className="!p-0 flex justify-start h-12">
                    <div className="size-12 rounded-lg bg-secondary border-r border-background" />
                    <p className="font-medium ms-2">Playlist { index + 1 }</p>
                </Button>
            )) }
        </div>
    );
};

export default RecentActivity;
