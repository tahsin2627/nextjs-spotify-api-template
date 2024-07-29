import { Badge } from "@/components/ui/badge";
import { BlurryBlob, Blob } from "@/components/ui/blurry-blob";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Home() {
    return (
        <Card className="w-full pe-2 overflow-hidden">
            <BlurryBlob>
                <Blob className="bg-purple-400 -right-24 -top-28" />
                <Blob className="bg-purple-400 -left-40 -top-64" />
                <CardHeader className="fixed">
                    <div className="flex gap-2">
                        <Badge>All</Badge>
                        <Badge>Music</Badge>
                        <Badge>Podcasts</Badge>
                    </div>
                </CardHeader>
                <ScrollArea aria-orientation="vertical" className="h-full pt-[72px]">
                    <CardContent className="space-y-6 w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            { Array.from({ length: 12 }).map((_, index) => (
                                <Button key={ index } variant="ghost" className="!p-0 flex justify-start h-12">
                                    <div className="size-12 rounded-lg bg-secondary border-r border-background" />
                                    <p className="font-medium ms-2">Playlist { index + 1 }</p>
                                </Button>
                            )) }
                        </div>
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
                                            <p className="text-sm text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                            <p className="text-sm text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                            <p className="text-sm text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
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
                                            <p className="text-sm text-muted-foreground text-wrap">Tom Misch, Timewarp Inc. ...</p>
                                        </Button>
                                    )) }
                                </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                    </CardContent>
                </ScrollArea>
            </BlurryBlob>
        </Card>
    );
}
