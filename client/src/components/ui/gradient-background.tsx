import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function GradientBackground({ 
  className,
  children 
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
      {children}
    </div>
  );
}
