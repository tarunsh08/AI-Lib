import { X, Bell } from "lucide-react";

export function ClosableAlert() {
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 rounded-xl p-4">
                <div className="flex gap-3">
                    <div className="p-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40">
                        <Bell className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                        <h3 className="text-sm font-medium text-violet-800 dark:text-violet-200">
                            Notification
                        </h3>
                        <p className="text-[13px] text-violet-700 dark:text-violet-300">
                            You have 3 new messages.
                        </p>
                    </div>
                    <button className="p-1 rounded-full hover:bg-violet-200/50 dark:hover:bg-violet-800/30">
                        <X className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    </button>
                </div>
            </div>
        </div>
    );
}