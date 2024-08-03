import Header from "@/components/Header/Header";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import { Card } from "@/components/ui/card";
import UserProvider from "@/providers/UserProvider";
import User from "@/lib/types/User";
import getCurrentUser from "@/lib/data/Users/getCurrentUser";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getCurrentUserPlaylists from "@/lib/data/Playlists/getCurrentUserPlaylists";
import UserPlaylistsProvider from "@/providers/UserPlaylistsProvider";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    const user: User = await getCurrentUser(session.accessToken) as User;
    const userPlaylists = await getCurrentUserPlaylists(session.accessToken);
    return (
        <UserProvider user={ user }>
            <UserPlaylistsProvider userPlaylists={ userPlaylists }>
                <div className="max-h-[100vh] grid gap-4">
                    <Header />
                    <main className="flex gap-4 w-full max-h-[75dvh]">
                        <Library />
                        <Card className="w-full overflow-hidden">
                            { children }
                        </Card>
                    </main>
                    <MusicPlayer />
                </div>
            </UserPlaylistsProvider>
        </UserProvider>
    );
}
