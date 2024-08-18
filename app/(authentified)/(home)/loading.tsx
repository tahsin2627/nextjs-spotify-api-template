import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Loading(): React.JSX.Element {
    return (
        <>
            <div className="flex p-4 gap-2 [&>*]:w-16 [&>*]:h-6 [&>*]:rounded-full">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            <ScrollArea aria-orientation="vertical" className="h-full z-50">
                <CardContent className="space-y-4 w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        { Array.from({ length: 12 }).map((_: unknown, index: number): React.JSX.Element => (
                            <div key={ index } className="flex justify-start items-center gap-2">
                                <Skeleton className="rounded-lg size-12" />
                                <Skeleton className="h-6 w-1/2" />
                            </div>
                        )) }
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">Specifically designed for you</h2>
                            <Button variant="ghost">See all</Button>
                        </div>
                        <ScrollArea className="grid">
                            <div className="p-4 flex">
                                { Array.from({ length: 12 }).map((_: unknown, index: number) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 gap-2">
                                        <Skeleton className="size-36 rounded-lg" />
                                        <Skeleton className="w-20 h-5" />
                                        <Skeleton className="w-36 h-10" />
                                    </Button>
                                )) }
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">Your favorites mixes</h2>
                            <Button variant="ghost">See all</Button>
                        </div>
                        <ScrollArea className="grid">
                            <div className="p-4 flex">
                                { Array.from({ length: 12 }).map((_: unknown, index: number) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 gap-2">
                                        <Skeleton className="size-36 rounded-lg" />
                                        <Skeleton className="w-20 h-5" />
                                        <Skeleton className="w-36 h-10" />
                                    </Button>
                                )) }
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">New releases</h2>
                            <Button variant="ghost">See all</Button>
                        </div>
                        <ScrollArea className="grid">
                            <div className="p-4 flex">
                                { Array.from({ length: 12 }).map((_: unknown, index: number) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 gap-2">
                                        <Skeleton className="size-36 rounded-lg" />
                                        <Skeleton className="w-20 h-5" />
                                        <Skeleton className="w-36 h-10" />
                                    </Button>
                                )) }
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                    <div>
                        <div className=" flex justify-between items-center">
                            <h2 className="text-lg font-medium">Podcasts episodes today</h2>
                            <Button variant="ghost">See all</Button>
                        </div>
                        <ScrollArea className="grid">
                            <div className="p-4 flex">
                                { Array.from({ length: 12 }).map((_: unknown, index: number) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 gap-2">
                                        <Skeleton className="size-36 rounded-lg" />
                                        <Skeleton className="w-20 h-5" />
                                        <Skeleton className="w-36 h-10" />
                                    </Button>
                                )) }
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </CardContent>
            </ScrollArea>
        </>
    );
};