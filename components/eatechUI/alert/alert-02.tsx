import { AlertTriangle } from "lucide-react";

export function ErrorAlert() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl p-4">
                <div className="flex gap-3">
                    <div className="p-1.5 rounded-full bg-red-100 dark:bg-red-900/40">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-0.5">
                        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                            Error
                        </h3>
                        <p className="text-[13px] text-red-700 dark:text-red-300">
                            Something went wrong. Please try again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}