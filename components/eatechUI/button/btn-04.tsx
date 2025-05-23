import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Btn01Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}


export function GradientShineButton({
    className,
    children = "Continue",
    ...props
}: Btn01Props) {
    return (
        <Button
            className={cn(
                "relative h-11 px-6",
                "bg-gradient-to-r from-blue-600 to-cyan-500",
                "text-white",
                "rounded-xl",
                "transition-all duration-300",
                "overflow-hidden",
                "group",
                "hover:shadow-lg hover:shadow-blue-500/30",
                "after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)]",
                "after:opacity-0 hover:after:opacity-100",
                "after:transition-opacity after:duration-500",
                "after:bg-[length:400%_400%] hover:after:animate-shine",
                className
            )}
            {...props}
        >
            <div className="relative z-10 flex items-center gap-2">
                <span>{children}</span>
                <ArrowRight
                    className={cn(
                        "w-4 h-4",
                        "transition-transform duration-300",
                        "group-hover:translate-x-1"
                    )}
                />
            </div>
        </Button>
    );
}