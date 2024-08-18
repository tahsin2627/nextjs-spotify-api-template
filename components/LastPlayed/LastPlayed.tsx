'use client';

import React, { FC, useContext } from 'react';
import { Button } from '../ui/button';
import { UserPlaylistsContext } from '@/providers/UserPlaylistsProvider';
import { SimplifiedPlaylist } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface LastPlayedProps { }

const LastPlayed: FC<LastPlayedProps> = () => {
    const userPlaylists = useContext(UserPlaylistsContext);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            { userPlaylists.items.slice(0, 12).map((playlist: SimplifiedPlaylist, index: number): React.JSX.Element => (
                <Button key={ index } variant="ghost" className="!p-0 flex justify-start h-12" asChild>
                    <Link href={ `/playlist?id=${playlist.id}` }>
                        <Image src={ playlist.images[0].url } height={ 44 } width={ 44 } className="rounded-lg" alt={ `Playlist ${playlist.name} cover` } />
                        <p className="font-medium ms-2">{ playlist.name }</p>
                    </Link>
                </Button>
            )) }
        </div>
    );
};

export default LastPlayed;
