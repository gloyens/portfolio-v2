"use client";

import { useRef, useEffect } from "react";
import { OverlayContainer } from "./styles";

export default function Overlay() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Provide the correct type for videoRef

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  return (
    <OverlayContainer>
      <video ref={videoRef} src="/media/shadows.mp4" loop autoPlay muted />
    </OverlayContainer>
  );
}
