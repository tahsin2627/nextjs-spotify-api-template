"use client";
/// <reference types="spotify-web-playback-sdk" />
import React, { createContext, useEffect } from "react";

export const PlayerContext = createContext<Spotify.Player | undefined>(undefined);

export default function PlayerProvider({ children, token }: { children: React.ReactNode; token: string; }) {

    const [player, setPlayer] = React.useState<Spotify.Player | undefined>();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            console.log("player ready");
            setPlayer(player);
            if (!player) {
                const player = new Spotify.Player({
                    name: "Spotifyer",
                    getOAuthToken: (cb) => {
                        cb(token);
                    },
                    volume: 0.5,
                });
                // Error handling
                player.addListener("initialization_error", ({ message }) => {
                    console.error(message);
                });
                player.addListener("authentication_error", ({ message }) => {
                    console.error(message);
                });
                player.addListener("account_error", ({ message }) => {
                    console.error(message);
                });
                player.addListener("playback_error", ({ message }) => {
                    console.error(message);
                });
                // Playback status updates
                player.addListener("player_state_changed", (state) => {
                    console.log(state);
                });
                // Ready
                player.addListener("ready", ({ device_id }) => {
                    console.log("Ready with Device ID", device_id);
                });
                // Not Ready
                player.addListener("not_ready", ({ device_id }) => {
                    console.log("Device ID has gone offline", device_id);
                });
                // Connect to the player!
                player.connect();
                player.disconnect();
            }
        };
    }, []);

    return (
        <PlayerContext.Provider value={ player }>
            { children }
        </PlayerContext.Provider>
    );
}
