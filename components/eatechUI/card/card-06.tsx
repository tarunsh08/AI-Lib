import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";

interface Card06Props {
    author?: {
        name?: string;
        username?: string;
        avatar?: string;
        timeAgo?: string;
    };
    content?: {
        text?: string;
        link?: {
            title?: string;
            description?: string;
            icon?: React.ReactNode;
        };
    };
    engagement?: {
        likes?: number;
        comments?: number;
        shares?: number;
        isLiked?: boolean;
        isBookmarked?: boolean;
    };
    onLike?: () => void;
    onComment?: () => void;
    onShare?: () => void;
    onBookmark?: () => void;
}

export function Card_06({
    author,
    content,
    engagement,
    onLike,
    onComment,
    onShare,
    onBookmark,
}: Card06Props) {
    return (
        <div className={cn(
            "w-full max-w-xl mx-auto",
            "bg-zinc-100 dark:bg-zinc-900",
            "rounded-2xl",
            "shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.5)]",
            "dark:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(50,50,50,0.2)]",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-[8px_8px_15px_rgba(0,0,0,0.1),-8px_-8px_15px_rgba(255,255,255,0.5)]",
            "dark:hover:shadow-[8px_8px_15px_rgba(0,0,0,0.3),-8px_-8px_15px_rgba(50,50,50,0.2)]",
            "active:shadow-inset active:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_5px_rgba(255,255,255,0.5)]",
            "dark:active:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.3),inset_-3px_-3px_5px_rgba(50,50,50,0.2)]"
        )}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className={cn(
                            "w-12 h-12 rounded-full",
                            "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                            "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                            "overflow-hidden"
                        )}>
                            <img
                                src={author?.avatar}
                                alt={author?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
                                {author?.name}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                @{author?.username} · {author?.timeAgo}
                            </p>
                        </div>
                    </div>
                    <button className={cn(
                        "p-2 rounded-full",
                        "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                        "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                        "hover:shadow-inset hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
                        "dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(50,50,50,0.2)]"
                    )}>
                        <MoreHorizontal className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </button>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                    {content?.text}
                </p>

                {content?.link && (
                    <div className={cn(
                        "mb-6 rounded-xl p-4",
                        "bg-zinc-200/50 dark:bg-zinc-800/50",
                        "shadow-[inset_3px_3px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_5px_rgba(255,255,255,0.5)]",
                        "dark:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.3),inset_-3px_-3px_5px_rgba(50,50,50,0.2)]",
                        "hover:shadow-[3px_3px_5px_rgba(0,0,0,0.1),-3px_-3px_5px_rgba(255,255,255,0.5)]",
                        "dark:hover:shadow-[3px_3px_5px_rgba(0,0,0,0.3),-3px_-3px_5px_rgba(50,50,50,0.2)]",
                        "transition-all duration-300"
                    )}>
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "p-3 rounded-lg",
                                "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                                "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]"
                            )}>
                                {content?.link.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                                    {content?.link.title}
                                </h4>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {content?.link.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onLike}
                            className={cn(
                                "flex items-center gap-2 p-2 rounded-full",
                                "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                                "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                                "hover:shadow-inset hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
                                "dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(50,50,50,0.2)]",
                                engagement?.isLiked 
                                    ? "text-rose-600 shadow-inset shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]"
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-rose-600"
                            )}
                        >
                            <Heart className={cn("w-5 h-5", engagement?.isLiked && "fill-current")} />
                            <span>{engagement?.likes}</span>
                        </button>
                        <button
                            onClick={onComment}
                            className={cn(
                                "flex items-center gap-2 p-2 rounded-full",
                                "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                                "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                                "hover:shadow-inset hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
                                "dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(50,50,50,0.2)]",
                                "text-zinc-600 dark:text-zinc-400 hover:text-blue-600"
                            )}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{engagement?.comments}</span>
                        </button>
                        <button
                            onClick={onShare}
                            className={cn(
                                "flex items-center gap-2 p-2 rounded-full",
                                "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                                "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                                "hover:shadow-inset hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
                                "dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(50,50,50,0.2)]",
                                "text-zinc-600 dark:text-zinc-400 hover:text-green-600"
                            )}
                        >
                            <Share2 className="w-5 h-5" />
                            <span>{engagement?.shares}</span>
                        </button>
                    </div>
                    <button
                        onClick={onBookmark}
                        className={cn(
                            "p-2 rounded-full",
                            "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]",
                            "dark:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(50,50,50,0.2)]",
                            "hover:shadow-inset hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
                            "dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(50,50,50,0.2)]",
                            engagement?.isBookmarked 
                                ? "text-blue-600 shadow-inset shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]"
                                : "text-zinc-600 dark:text-zinc-400"
                        )}
                    >
                        <Bookmark className={cn("w-5 h-5", engagement?.isBookmarked && "fill-current")} />
                    </button>
                </div>
            </div>
        </div>
    );
}