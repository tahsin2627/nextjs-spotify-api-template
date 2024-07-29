import React, { FC } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import * as icons from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface LibraryProps { }

const Library: FC<LibraryProps> = (): React.JSX.Element => (
    <Card className="w-1/4 min-w-[270px] max-w-[400px]">
        <div className="fixed">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <h2 className="flex items-center gap-2 text-lg font-medium justify-between">
                        <icons.Library />
                        Library
                    </h2>
                    <div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant="ghost" size="sm">
                                        <icons.Plus />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>New playlist</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
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
            <CardContent className="space-x-2 ps-6">
                <Badge>Playlists</Badge>
                <Badge>Albums</Badge>
                <Badge>Artistes</Badge>
            </CardContent>
        </div>
        <CardFooter className="flex flex-col gap-2 h-full pt-32 pb-0 px-2">
            <div className="flex justify-between w-full">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost" size="sm">
                                <icons.Search />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Search</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                Recents
                                <icons.ListFilter className="ms-2" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Filter</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <ScrollArea aria-orientation="vertical" className="h-full w-full">
                <div className="w-full flex flex-col pe-4">
                    { Array.from({ length: 25 }).map((_: unknown, index: number): React.JSX.Element => (
                        <Button variant="ghost" key={ index } className="flex justify-start !py-8 !px-2 items-center">
                            <div className="size-12 rounded-lg bg-secondary" />
                            <div className="text-start ms-2">
                                <p>Playlist { index + 1 }</p>
                                <p className="text-sm text-muted-foreground flex items-center">Description<icons.Dot />Author</p>
                            </div>
                        </Button>
                    )) }
                </div>
            </ScrollArea>
        </CardFooter>
    </Card>
);

export default Library;
