"use client";
/// <reference types="spotify-web-playback-sdk" />

import React, { createContext, useEffect, useState } from "react";

// Context to share the player instance
export const PlayerContext = createContext<Spotify.Player | undefined>(undefined);

export default function PlayerProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const [player, setPlayer] = useState<Spotify.Player | undefined>(undefined);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      console.log("Spotify Web Playback SDK is ready");

      const SpotifyPlayer = (window as any).Spotify.Player;
      const newPlayer = new SpotifyPlayer({
        name: "OpenSpot Player",
        getOAuthToken: (cb: (token: string) => void) => {
          cb(token);
        },
        volume: 0.5,
      });

      // Set up event listeners
      newPlayer.addListener("initialization_error", ({ message }: any) =>
        console.error("Init error:", message)
      );
      newPlayer.addListener("authentication_error", ({ message }: any) =>
        console.error("Auth error:", message)
      );
      newPlayer.addListener("account_error", ({ message }: any) =>
        console.error("Account error:", message)
      );
      newPlayer.addListener("playback_error", ({ message }: any) =>
        console.error("Playback error:", message)
      );

      newPlayer.addListener("player_state_changed", (state: any) => {
        console.log("Player state changed:", state);
      });

      newPlayer.addListener("ready", ({ device_id }: any) => {
        console.log("Ready with Device ID", device_id);
      });

      newPlayer.addListener("not_ready", ({ device_id }: any) => {
        console.log("Device ID has gone offline", device_id);
      });

      newPlayer.connect();
      setPlayer(newPlayer);
    };
  }, [token]);

  return (
    <PlayerContext.Provider value={player}>
      {children}
    </PlayerContext.Provider>
  );
}
