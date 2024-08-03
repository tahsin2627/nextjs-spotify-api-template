import { ScrollArea } from "@/components/ui/scroll-area";
import getCategory from "@/lib/data/Categories/getCategory";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import * as React from "react";

export default async function Page() {
    const headerList = headers();
    const categoryId: string = headerList.get("x-current-path-item-id") as string;
    const session = await getServerSession(authOptions);
    const token = session.accessToken;
    const category = await getCategory(token, categoryId);
    const colors = [
        'from-indigo-800',
        'from-blue-800',
        'from-green-800',
        'from-red-800',
        'from-yellow-800',
        'from-pink-800',
        'from-purple-800',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <ScrollArea className="w-full h-full">
            <div className={ `bg-gradient-to-b to-card h-80 ${color}` }></div>
        </ScrollArea>
    );
}
