"use client";

import React, { FC, useCallback, useEffect, useState } from 'react';
import * as icons from "lucide-react";
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PlayerContext } from '@/providers/PlayerProvider';
// import startResumePlayback from '@/lib/actions/Player/startResumePlayback';

interface MusicPlayerProps { token: string; }

const MusicPlayer: FC<MusicPlayerProps> = ({ token }) => {

    async function startResumePlayback(token: string) {
        try {
            const res: Response = await fetch(
                `https://api.spotify.com/v1/me/player/play`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    method: "PUT",
                }
            );
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return await res.json();
        } catch (error) {
            console.error(error);
        }
    }

    const player = React.useContext(PlayerContext) as Spotify.Player;

    return (
        <div className="w-full flex justify-between items-center min-h-[72px]">
            <div className="flex items-center">
                <div className="size-12 bg-secondary rounded-lg" />
                <div className="ms-2 me-6">
                    <p>Music Title</p>
                    <p className="text-sm text-muted-foreground">Artist</p>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <icons.PlusCircle />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Add to</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 [&>div]:flex [&>div]:items-center">
                <div className="gap-1">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Toggle size="sm">
                                    <icons.LucideShuffle />
                                </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>Shuffle</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <icons.LucideSkipBack />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Previous</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={ () => startResumePlayback(token) }>
                                    <icons.LucidePause />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Pause</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <icons.LucideSkipForward />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Next</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Toggle size="sm">
                                    <icons.LucideRepeat />
                                </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>Repeat</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="gap-4">
                    <p>-- : -- : --</p>
                    <Slider className="w-[500px] h-2" />
                    <p>-- : -- : --</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <icons.PlaySquare />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Now playing view</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <icons.ListMusic />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Queue</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" onToggle={ () => player.setVolume(0) }>
                                <icons.LucideVolume2 />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Mute</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Slider
                    className="w-32 h-2"
                    // onValueChange={ (e) => {
                    //     player._options.volume = e[0] / 100;
                    //     player.setVolume(e[0] / 100);
                    //     console.log(player._options.volume);
                    // } }
                    defaultValue={ [50] }
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
