import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getSeveralCategories from "@/lib/data/Categories/getSeveralCategories";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const session = await getServerSession(authOptions);
    const token = session.accessToken;
    const data = await getSeveralCategories(token, 0, 48);
    const categories = data?.categories;
    return (
        <ScrollArea className="w-full h-full p-4">
            <h1 className="text-2xl font-medium">Browse all categories</h1>
            <div className="flex gap-4 w-full flex-wrap mt-4 px-2">
                { categories?.items.map((category) => (
                    <div key={ category.id } className="relative grow cursor-pointer hover:scale-[1.02] hover:border-border hover:border rounded-lg transition">
                        <Link href={ `/category?id=${category.id}` }>
                            <Image
                                src={ category.icons[0].url }
                                width={ 180 }
                                height={ 180 }
                                alt={ category.name }
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white text-2xl font-bold">{ category.name }</h2>
                            </div>
                        </Link>
                    </div>
                )) }
            </div>
        </ScrollArea>
    );
}
