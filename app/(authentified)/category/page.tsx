import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import getCategory from "@/lib/data/categories/getCategory";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import * as React from "react";
import { randomColor } from "@/lib/colors";
import { CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default async function Page() {
    const headerList = headers();
    const categoryId: string = headerList.get("x-current-path-item-id") as string;
    const session = await getServerSession(authOptions);
    const token = session.accessToken;
    const category = await getCategory(token, categoryId);
    return (
        <ScrollArea className="w-full h-full">
            <CardHeader className={ `bg-gradient-to-b to-card ${randomColor}` }>
                <div className="flex gap-6 items-center py-4">
                    <Image src={ category?.icons[0].url || '' } className="rounded-lg bg-secondary" width={ 180 } height={ 180 } alt="Category image mosaic" />
                    <h1 className="text-7xl font-bold">{ category?.name }</h1>
                </div>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </ScrollArea>
    );
}
