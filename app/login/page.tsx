'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Page() {

    // const { data: session } = useSession();

    return (

        <Card className="m-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login with Spotify</CardTitle>
                <CardDescription>
                    Enter your Spotify credentials to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button type="submit" className="w-full" onClick={ () => signIn('spotify', { callbackUrl: '/' }) }>
                    Login
                </Button>
            </CardContent>
        </Card>
    );
}
