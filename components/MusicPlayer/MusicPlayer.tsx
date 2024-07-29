import React, { FC } from 'react';
import * as icons from "lucide-react";
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '../ui/toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface MusicPlayerProps { }

const MusicPlayer: FC<MusicPlayerProps> = () => (
    <div className="w-full flex justify-between items-center h-fit">
        <div className="flex items-center">
            <div className="size-12 bg-secondary rounded-lg" />
            <div className="ms-2 me-6">
                <p>Music Title</p>
                <p className="text-sm text-muted-foreground">Artist</p>
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="ghost" size="sm">
                            <icons.PlusCircle />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add to</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-1">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Toggle size="sm">
                                <icons.LucideShuffle />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Shuffle</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost" size="sm">
                                <icons.LucideSkipBack />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Previous</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button>
                                <icons.LucidePause />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Pause</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost" size="sm">
                                <icons.LucideSkipForward />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Next</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Toggle size="sm">
                                <icons.LucideRepeat />
                            </Toggle>
                        </TooltipTrigger>
                        <TooltipContent>Repeat</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex items-center gap-4">
                <p>--:--:--</p>
                <Slider className="w-[500px] h-2" />
                <p>--:--:--</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="ghost" size="sm">
                            <icons.PlaySquare />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Now playing view</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="ghost" size="sm">
                            <icons.ListMusic />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Queue</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant="ghost" size="sm">
                            <icons.LucideVolume2 />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Mute</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Slider className="w-32 h-2" />
        </div>
    </div>
);

export default MusicPlayer;
