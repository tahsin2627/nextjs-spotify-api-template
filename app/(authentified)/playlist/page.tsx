import * as React from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import * as icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { headers } from "next/headers";
import PlaylistTable from "@/components/PlaylistTable/PlaylistTable";
import Playlist from "@/lib/types/Playlist";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from 'next/image';
import { getPlaylist } from "@/lib/spotify";
import PlaylistProvider from "@/providers/PlaylistProvider";

export default async function Page() {
    const headerList = headers();
    const playlistId = headerList.get("x-current-path-item-id");
    const session = await getServerSession(authOptions);
    const playlist: Playlist = await getPlaylist(session.accessToken, playlistId);

    return (
        <PlaylistProvider playlist={ playlist }>
            <ScrollArea aria-orientation="vertical" className="h-full z-50">
                <CardHeader>
                    <div className="flex gap-6 items-center py-4">
                        <Image src={ playlist.images[0].url } className="rounded-lg bg-secondary" width={ 180 } height={ 180 } alt="Playlist image mosaic" />
                        <div className="flex flex-col items-start gap-4 flex-wrap">
                            <h1 className="text-7xl font-bold">{ playlist.name }</h1>
                            <p className="text-muted-foreground flex items-center [&>*]:mt-1 [&>*]:text-primary [&>*]:mx-[-3px] [&>*]:size-6">
                                { playlist.owner.display_name }
                                <icons.Dot />
                                { playlist.description ? playlist.description : "No description" }
                                <icons.Dot />{ playlist.followers.total } followers
                                <icons.Dot />{ playlist.tracks.total } tracks</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 w-full">
                    <div className="flex justify-between items-center [&>div]:flex [&>div]:items-center [&>div]:gap-1">
                        <div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button size="lg">
                                            <icons.LucidePause />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Pause</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Toggle>
                                            <icons.LucideShuffle />
                                        </Toggle>
                                    </TooltipTrigger>
                                    <TooltipContent>Shuffle</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost">
                                            <icons.Download />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Download</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost">
                                            <icons.MoreHorizontal />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>More</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div>
                            <Input placeholder="Search..." className="w-80" />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost">
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
                    </div>
                    <PlaylistTable />
                </CardContent>
            </ScrollArea >
        </PlaylistProvider>
    );
}
