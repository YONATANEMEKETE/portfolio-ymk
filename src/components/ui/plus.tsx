import { cn } from "@/lib/utils";

export function Plus({ className }: { className?: string }) {
  return (
    <div className={cn("absolute size-4 flex items-center justify-center", className)}>
      <div className="absolute h-px w-full bg-white/20" />
      <div className="absolute w-px h-full bg-white/20" />
    </div>
  );
}
