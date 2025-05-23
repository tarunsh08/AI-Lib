import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";

interface Card04Props {
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

export function Card_04({
    author,
    content,
    engagement,
    onLike,
    onComment,
    onShare,
    onBookmark,
}: Card04Props) {
    return (
        <div className={cn(
            "w-full max-w-xl mx-auto",
            "bg-white dark:bg-zinc-900",
            "border-b border-zinc-200 dark:border-zinc-800",
            "px-4 py-3",
            "transition-colors duration-150",
            "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
        )}>
            <div className="flex gap-3">
                <img
                    src={author?.avatar}
                    alt={author?.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-0.5">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                            {author?.name}
                        </h3>
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm">·</span>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                            @{author?.username}
                        </p>
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm">·</span>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {author?.timeAgo}
                        </p>
                        <button className="ml-auto text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <p className="text-sm text-zinc-800 dark:text-zinc-200 mb-2">
                        {content?.text}
                    </p>
                    
                    {content?.link && (
                        <div className="mb-2 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                            <div className="p-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                                        {content?.link.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                            {content?.link.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                            {content?.link.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="flex justify-between max-w-md">
                        <button
                            onClick={onComment}
                            className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 p-2 -ml-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>{engagement?.comments}</span>
                        </button>
                        <button
                            onClick={onLike}
                            className={cn(
                                "flex items-center gap-1 text-xs p-2 -ml-2",
                                engagement?.isLiked ? "text-rose-500" : "text-zinc-500 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400"
                            )}
                        >
                            <Heart className={cn("w-4 h-4", engagement?.isLiked && "fill-current")} />
                            <span>{engagement?.likes}</span>
                        </button>
                        <button
                            onClick={onShare}
                            className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-400 p-2 -ml-2"
                        >
                            <Share2 className="w-4 h-4" />
                            <span>{engagement?.shares}</span>
                        </button>
                        <button
                            onClick={onBookmark}
                            className={cn(
                                "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-2 -ml-2",
                                engagement?.isBookmarked && "text-blue-500 dark:text-blue-400"
                            )}
                        >
                            <Bookmark className={cn("w-4 h-4", engagement?.isBookmarked && "fill-current")} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}