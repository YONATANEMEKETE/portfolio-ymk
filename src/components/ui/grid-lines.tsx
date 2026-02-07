import { cn } from "@/lib/utils";

export function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute left-[10%] grid-line-v opacity-50" />
      <div className="absolute left-[30%] grid-line-v opacity-50" />
      <div className="absolute left-[50%] grid-line-v opacity-50" />
      <div className="absolute left-[70%] grid-line-v opacity-50" />
      <div className="absolute left-[90%] grid-line-v opacity-50" />

      {/* Horizontal Lines */}
      <div className="absolute top-[20%] grid-line-h opacity-50" />
      <div className="absolute top-[40%] grid-line-h opacity-50" />
      <div className="absolute top-[60%] grid-line-h opacity-50" />
      <div className="absolute top-[80%] grid-line-h opacity-50" />
    </div>
  );
}
