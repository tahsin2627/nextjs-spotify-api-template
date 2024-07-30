import Header from "@/components/Header/Header";
import Library from "@/components/Library/Library";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

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
                { children }
            </main>
            <MusicPlayer />
        </div>
    );
}
