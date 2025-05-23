import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Btn01Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

export function NeonBorderButton({
    className,
    children = "Continue",
    ...props
}: Btn01Props) {
    return (
        <Button
            className={cn(
                "relative h-11 px-6",
                "bg-transparent",
                "text-zinc-900 dark:text-zinc-50",
                "rounded-xl",
                "transition-all duration-300",
                "overflow-hidden",
                "group",
                "border-2 border-transparent",
                "hover:border-blue-500/50",
                "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
                "before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500",
                "before:opacity-0 hover:before:opacity-100",
                "before:transition-opacity before:duration-500",
                className
            )}
            {...props}
        >
            <div className="relative z-10 flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg px-4 py-2">
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