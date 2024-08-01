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
import Playlist from "@/types/Playlist";
import { getSession } from "next-auth/react";

export default async function Page() {
    const session = await getSession();
    console.log(session);
    const headerList = headers();
    const playlistId = headerList.get("x-current-path-item-id");
    async function fetchPlaylist() {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${session}`,
            }
        },);
        const data: Playlist = await response.json();
        console.log(data);
        return data;
    }
    const playlist = await fetchPlaylist();
    return (
        <ScrollArea aria-orientation="vertical" className="h-full z-50">
            <CardHeader>
                <div className="flex gap-6 items-center py-4">
                    <div className="size-40 rounded-lg bg-secondary" />
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-7xl font-bold">{ playlist.name }</h1>
                        <p className="text-muted-foreground">Description</p>
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
        </ScrollArea>
    );
}
