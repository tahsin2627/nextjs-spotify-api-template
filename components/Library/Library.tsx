import React, { FC } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import * as icons from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LibraryProps { }

const Library: FC<LibraryProps> = (): React.JSX.Element => (
    <Card className="min-w-[400px] !max-h-fit">
        <CardHeader>
            <div className="flex justify-between items-center">
                <h2 className="flex items-center gap-2 text-lg font-medium">
                    <icons.Library />
                    Library
                </h2>
                <div>
                    <Button variant="ghost" size="sm">
                        <icons.Plus />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <icons.ArrowRight />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-x-2">
            <Badge>Playlists</Badge>
            <Badge>Albums</Badge>
            <Badge>Artistes</Badge>
        </CardContent>
        <CardFooter className="grid grid-cols-1 gap-2">
            <div className="flex justify-between w-full">
                <Button variant="ghost" size="sm">
                    <icons.Search />
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                    Recents
                    <icons.ListFilter />
                </Button>
            </div>
            <ScrollArea className="h-[900px]">
                <div className="grid h-full grid-cols-1">
                    { Array.from({ length: 25 }).map((_: unknown, index: number): React.JSX.Element => (
                        <Button variant="ghost" key={ index } className="flex justify-start !py-8 !px-2 items-center">
                            <div className="w-12 h-12 rounded-lg bg-secondary" />
                            <div className="text-start ms-2">
                                <p>Playlist { index + 1 }</p>
                                <p className="text-sm text-muted-foreground flex items-center">Description<icons.Dot />Auteur</p>
                            </div>
                        </Button>
                    )) }
                </div>
            </ScrollArea>
        </CardFooter>
    </Card>
);

export default Library;
