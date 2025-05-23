import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Btn01Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}


export function Pressable3DButton({
    className,
    children = "Continue",
    ...props
}: Btn01Props) {
    return (
        <Button
            className={cn(
                "relative h-11 px-6",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-zinc-50 dark:text-zinc-900",
                "rounded-xl",
                "transition-all duration-150",
                "overflow-hidden",
                "group",
                "shadow-[0_5px_0_rgba(0,0,0,0.2)] dark:shadow-[0_5px_0_rgba(255,255,255,0.1)]",
                "hover:translate-y-[2px] hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_3px_0_rgba(255,255,255,0.1)]",
                "active:translate-y-[5px] active:shadow-none",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2">
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