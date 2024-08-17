import Header from "@/components/Header/Header";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import { Card } from "@/components/ui/card";
import UserProvider from "@/providers/UserProvider";
import getCurrentUser from "@/lib/data/users/getCurrentUser";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getCurrentUserPlaylists from "@/lib/data/playlists/getCurrentUserPlaylists";
import UserPlaylistsProvider from "@/providers/UserPlaylistsProvider";
import PlayerProvider from "@/providers/PlayerProvider";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions);
    const user = await getCurrentUser(session.accessToken);
    const userPlaylists = await getCurrentUserPlaylists(session.accessToken);

    return (
        <UserProvider user={ user }>
            <UserPlaylistsProvider userPlaylists={ userPlaylists }>
                <PlayerProvider token={ session.accessToken }>
                    <div className="max-h-[100vh] grid gap-4">
                        <Header />
                        <main className="flex gap-4 w-full max-h-[75dvh]">
                            <Library />
                            <Card className="w-full overflow-hidden">
                                { children }
                            </Card>
                        </main>
                        <MusicPlayer token={ session.accessToken } />
                    </div>
                </PlayerProvider>
            </UserPlaylistsProvider>
        </UserProvider>
    );
}
