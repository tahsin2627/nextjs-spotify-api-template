import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import LastPlayed from "@/components/LastPlayed/LastPlayed";

export default function Home() {
    return (
        <>
            <CardHeader className="fixed">
                <div className="flex gap-2">
                    <Badge>All</Badge>
                    <Badge>Music</Badge>
                    <Badge>Podcasts</Badge>
                </div>
            </CardHeader>
            <ScrollArea aria-orientation="vertical" className="h-full pt-14 z-50">
                <CardContent className="space-y-4 w-full">
                    <LastPlayed />
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium">Specifically designed for you</h2>
                            <Button variant="ghost">See all</Button>
                        </div>
                        <ScrollArea className="grid">
                            <div className="p-4 flex">
                                { Array.from({ length: 12 }).map((_, index) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 text-start">
                                        <div className="size-36 bg-secondary rounded-lg" />
                                        <p className="mt-2 font-medium">Daily Mix { index + 1 }</p>
                                        <p className="text-sm font-normal text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                { Array.from({ length: 12 }).map((_, index) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 text-start">
                                        <div className="size-36 bg-secondary rounded-lg" />
                                        <p className="mt-2 font-medium">Mix { index + 1 }</p>
                                        <p className="text-sm font-normal text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                { Array.from({ length: 12 }).map((_, index) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 text-start">
                                        <div className="size-36 bg-secondary rounded-lg" />
                                        <p className="mt-2 font-medium">Album { index + 1 }</p>
                                        <p className="text-sm font-normal text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                { Array.from({ length: 12 }).map((_, index) => (
                                    <Button key={ index } variant="ghost" className="flex flex-col items-start w-42 h-full p-2 text-start">
                                        <div className="size-36 bg-secondary rounded-lg" />
                                        <p className="mt-2 font-medium">Podcast { index + 1 }</p>
                                        <p className="text-sm font-normal text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
}
