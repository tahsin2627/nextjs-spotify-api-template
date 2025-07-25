declare namespace Spotify {
  interface Player {
    connect(): Promise<boolean>;
    disconnect(): void;
    // add more as needed
  }
}
