"use client";

import { useEffect, useState } from "react";
import { BaseChildrenProps } from "@/models";

interface MouseTooltipProps extends BaseChildrenProps {
  show?: boolean
}

const MouseTooltip  = ({ children, show }: MouseTooltipProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const tooltipPos = { x: mousePos.x + scrollPos.x, y: mousePos.y + scrollPos.y };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => setMousePos({ x: event.clientX, y: event.clientY });
    const handleScrollMove = () => setScrollPos({ x: window.scrollX, y: window.scrollY });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScrollMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScrollMove);
    };
  }, []);


  return (
    <div className={`absolute ml-4 mt-4 ${show ? "block" : "hidden"}`}
      style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
    >
      {children}
    </div>
  );
};

export default MouseTooltip;
