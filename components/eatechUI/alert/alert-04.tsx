import { Info } from "lucide-react";

export function InfoAlert() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4">
                <div className="flex gap-3">
                    <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-0.5">
                        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                            Information
                        </h3>
                        <p className="text-[13px] text-blue-700 dark:text-blue-300">
                            Here's some important information for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}