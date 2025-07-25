declare namespace Spotify {
  interface Player {
    connect(): Promise<boolean>;
    disconnect(): void;
  }
}

// 👇 Add this global extension
interface Window {
  onSpotifyWebPlaybackSDKReady: () => void;
}
