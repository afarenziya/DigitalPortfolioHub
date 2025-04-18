import React from "react";
import { cn } from "@/lib/utils";

interface FloatingAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  rotation?: number;
  children: React.ReactNode;
}

export const FloatingAnimation = ({
  delay = 0,
  rotation = 0,
  children,
  className,
  ...props
}: FloatingAnimationProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div
      className={cn("animate-float", className)}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};
