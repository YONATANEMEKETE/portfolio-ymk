import { cn } from "@/lib/utils";
import { Plus } from "./plus";

interface TechnicalSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  showCorners?: boolean;
}

export function TechnicalSection({
  children,
  className,
  showCorners = true,
  ...props
}: TechnicalSectionProps) {
  return (
    <section
      className={cn(
        "relative border-x border-white/10 py-16 px-8 sm:px-12",
        className
      )}
      {...props}
    >
      {showCorners && (
        <>
          <Plus className="-top-2 -left-2" />
          <Plus className="-top-2 -right-2" />
          <Plus className="-bottom-2 -left-2" />
          <Plus className="-bottom-2 -right-2" />
        </>
      )}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      
      {children}
    </section>
  );
}
