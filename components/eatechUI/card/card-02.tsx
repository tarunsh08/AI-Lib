import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";

interface Card02Props {
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

export function Card_02({
    author,
    content,
    engagement,
    onLike,
    onComment,
    onShare,
    onBookmark,
}: Card02Props) {
    return (
        <div className={cn(
            "w-full max-w-xl mx-auto",
            "bg-white dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800",
            "rounded-xl",
            "transition-all duration-200 ease-in-out",
            "hover:shadow-sm"
        )}>
            <div className="p-5">
                <div className="flex items-start gap-3">
                    <img
                        src={author?.avatar}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    {author?.name}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    @{author?.username} · {author?.timeAgo}
                                </p>
                            </div>
                            <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 mb-3">
                            {content?.text}
                        </p>
                        
                        {content?.link && (
                            <div className="mb-3 rounded-lg border border-zinc-200 dark:border-zinc-800 p-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                                        {content?.link.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            {content?.link.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {content?.link.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={onLike}
                                    className={cn(
                                        "flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400",
                                        engagement?.isLiked && "text-rose-600 dark:text-rose-500",
                                        "hover:text-rose-600 dark:hover:text-rose-500"
                                    )}
                                >
                                    <Heart className={cn("w-4 h-4", engagement?.isLiked && "fill-current")} />
                                    <span>{engagement?.likes}</span>
                                </button>
                                <button
                                    onClick={onComment}
                                    className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{engagement?.comments}</span>
                                </button>
                                <button
                                    onClick={onShare}
                                    className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-500"
                                >
                                    <Share2 className="w-4 h-4" />
                                    <span>{engagement?.shares}</span>
                                </button>
                            </div>
                            <button
                                onClick={onBookmark}
                                className={cn(
                                    "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300",
                                    engagement?.isBookmarked && "text-zinc-900 dark:text-zinc-100"
                                )}
                            >
                                <Bookmark className={cn("w-4 h-4", engagement?.isBookmarked && "fill-current")} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}