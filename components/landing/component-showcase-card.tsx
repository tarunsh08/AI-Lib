import AIInputAdvanced from "../eatechUI/ai-input/ai-input-05";
import { ClosableAlert } from "../eatechUI/alert/alert-05";
import { GradientShineButton } from "../eatechUI/button/btn-04";
import { CyberpunkButton } from "../eatechUI/button/btn-05";
import { Card_06 } from "../eatechUI/card/card-06";

interface ComponentShowcaseCardProps {
    className: string;
}

export function ComponentShowcaseCard({
    className,
}: ComponentShowcaseCardProps) {
    return (
        <div className={className}>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-700 to-zinc-400 dark:from-zinc-100 dark:to-zinc-400">
                Buttons, Inputs & More
            </div>

            <div className="space-y-12">
                <div className="space-y-20 mt-8">
                    {[
                        { component: <AIInputAdvanced/>, label: "Input 10" },
                        { component: <ClosableAlert/>, label: "Alert 04" },
                        {
                            component: (
                                <div className="w-full flex justify-center gap-4">
                                    <CyberpunkButton className="w-full" />
                                    <GradientShineButton className="w-full" />
                                </div>
                            ),
                            label: "Welcome",
                        },
                    ].map((btn, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="h-16 flex items-center gap-8">
                                {btn.component}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center pt-8">
                    <Card_06 />
                </div>
            </div>

            <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-4">
                + more available
            </p>
        </div>
    );
}