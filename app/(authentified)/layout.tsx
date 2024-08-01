import Header from "@/components/Header/Header";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import { Card } from "@/components/ui/card";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-h-[100vh] grid gap-4">
            <Header />
            <main className="flex gap-4 w-full max-h-[85dvh]">
                <Library />
                <Card className="w-full pe-2 overflow-hidden">
                    { children }
                </Card>
            </main>
            <MusicPlayer />
        </div>
    );
}
