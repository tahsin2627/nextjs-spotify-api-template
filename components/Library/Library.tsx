"use client";

import React, { useContext } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import * as icons from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';
import { Paging, SimplifiedPlaylist } from '@/lib/types';
import { UserPlaylistsContext } from '@/providers/UserPlaylistsProvider';

export default function Library({ className }: { className: string; }): React.JSX.Element {
    const pathname: string | null = usePathname();
    const searchParams: ReadonlyURLSearchParams | null = useSearchParams();
    const paramId: string | null | undefined = searchParams?.get('id');
    const userPlaylists: Paging<SimplifiedPlaylist> = useContext(UserPlaylistsContext);

    return (
        <Card className={ `${className}` }>
            <div className="fixed w-fit">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <h2 className="flex items-center gap-2 text-lg font-medium justify-between">
                            <icons.Library />
                            Library
                        </h2>
                        <div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <icons.Plus />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>New playlist</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <icons.ArrowRight />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Expand library</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-x-2">
                    <Badge>Playlists</Badge>
                    <Badge>Albums</Badge>
                    <Badge>Artistes</Badge>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2 h-full pt-28 pb-0 px-0">
                <div className="flex justify-between w-full px-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <icons.Search />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Search</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost">
                                    Recents
                                    <icons.ListFilter className="ms-2" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Filter</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <ScrollArea aria-orientation="vertical" className="w-full mb-2 px-2">
                    <div className="w-full flex flex-col">
                        { userPlaylists?.items.map((playlist: any, index: number): React.JSX.Element => (
                            <Button variant="ghost" key={ index } className={ `flex justify-start !py-8 !px-2 items-center` } asChild>
                                <Link href={ `/playlist?id=${playlist.id}` }>
                                    { playlist.images ?
                                        <>
                                            <Image src={ playlist.images[0].url } alt={ `Playlist ${playlist.name} image` } className="rounded-lg bg-secondary" width={ 48 } height={ 48 } />
                                        </>
                                        :
                                        <div className="bg-secondary size-12 rounded-lg" />
                                    }
                                    <div className="text-start ms-2">
                                        <p className={ `${pathname === "/playlist" && paramId === playlist.id ? 'text-primary' : null}` }>{ playlist.name }</p>
                                        <p className="text-sm text-muted-foreground flex items-center">Playlist<icons.Dot className="size-6 text-primary mx-[-4px]" />{ playlist.owner.display_name }</p>
                                    </div>
                                </Link>
                            </Button>
                        )) }
                    </div>
                </ScrollArea>
            </CardFooter >
        </Card >
    );
};
