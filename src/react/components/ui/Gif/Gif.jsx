import { useState } from "react";

export function Gif({ src, className }) {
    const [isPlaying, setIsPlaying] = useState(true);

    const handleGifClick = () => {
        setIsPlaying(false);
        setTimeout(() => {
            setIsPlaying(true);
        }, 0);
    };

    return <div src={src} className={`gif ${isPlaying ? "playing" : ""} ${className}`} onClick={handleGifClick} />
}