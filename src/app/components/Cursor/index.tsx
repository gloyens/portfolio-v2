"use client";

import { useEffect, useState } from "react";
import { CursorWrapper } from "./styles";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (event: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    const handleLinkHover = (event: { target: { tagName: string } }) => {
      setIsHoveringLink(event.target.tagName === "A");
    };

    document.addEventListener("mouseover", handleLinkHover);
    document.addEventListener("mouseout", () => setIsHoveringLink(false));

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleLinkHover);
      document.removeEventListener("mouseout", () => setIsHoveringLink(false));
    };
  }, []);

  return (
    <CursorWrapper
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x,
        padding: isHoveringLink ? "32px" : "12px",
      }}
    />
  );
}
