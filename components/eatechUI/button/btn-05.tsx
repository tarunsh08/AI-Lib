import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Btn01Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}


export function CyberpunkButton({
    className,
    children = "Continue",
    ...props
}: Btn01Props) {
    return (
        <Button
            className={cn(
                "relative h-11 px-6",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-rose-500 dark:text-cyan-400",
                "rounded-none",
                "transition-all duration-300",
                "overflow-hidden",
                "group",
                "border-2 border-rose-500 dark:border-cyan-400",
                "hover:bg-zinc-800/80 dark:hover:bg-zinc-100/80",
                "shadow-[0_0_10px_-2px] shadow-rose-500/50 dark:shadow-cyan-400/50",
                "hover:shadow-[0_0_15px_-2px] hover:shadow-rose-500/70 dark:hover:shadow-cyan-400/70",
                "before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]",
                "before:bg-gradient-to-r before:from-transparent before:via-rose-500 dark:before:via-cyan-400 before:to-transparent",
                "before:opacity-0 group-hover:before:opacity-100",
                "before:transition-opacity before:duration-500",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2 font-mono tracking-wider">
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