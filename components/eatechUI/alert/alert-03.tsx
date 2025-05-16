import { Button } from "@/components/ui/button";
import { AlertOctagon } from "lucide-react";

export function ActionAlert() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4">
                <div className="flex gap-3">
                    <div className="p-1.5 rounded-full bg-rose-100 dark:bg-rose-900/40">
                        <AlertOctagon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="space-y-0.5">
                            <h3 className="text-sm font-medium text-rose-800 dark:text-rose-200">
                                Critical Issue
                            </h3>
                            <p className="text-[13px] text-rose-700 dark:text-rose-300">
                                Your storage is almost full (95% used).
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300">
                                Learn More
                            </Button>
                            <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-white">
                                Upgrade Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}