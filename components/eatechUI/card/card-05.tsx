import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";

interface Card05Props {
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

export function Card_05({
    author,
    content,
    engagement,
    onLike,
    onComment,
    onShare,
    onBookmark,
}: Card05Props) {
    return (
        <div className={cn(
            "w-full max-w-xl mx-auto",
            "bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg",
            "border border-white/20 dark:border-zinc-700/50",
            "rounded-2xl shadow-lg",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-xl hover:shadow-zinc-200/10 dark:hover:shadow-zinc-900/10",
            "hover:border-white/30 dark:hover:border-zinc-600/50"
        )}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={author?.avatar}
                                alt={author?.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30 dark:ring-zinc-700/50"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                                {author?.name}
                            </h3>
                            <p className="text-sm text-zinc-600/80 dark:text-zinc-400/80">
                                @{author?.username} · {author?.timeAgo}
                            </p>
                        </div>
                    </div>
                    <button className="p-1.5 rounded-full hover:bg-white/20 dark:hover:bg-zinc-800/50">
                        <MoreHorizontal className="w-5 h-5 text-zinc-600/80 dark:text-zinc-400/80" />
                    </button>
                </div>

                <p className="text-zinc-800/90 dark:text-zinc-200/90 mb-6 leading-relaxed">
                    {content?.text}
                </p>

                {content?.link && (
                    <div className="mb-6 rounded-xl bg-white/20 dark:bg-zinc-800/30 border border-white/30 dark:border-zinc-700/50 overflow-hidden backdrop-blur-sm hover:bg-white/30 dark:hover:bg-zinc-800/40 transition-colors">
                        <div className="p-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/40 dark:bg-zinc-700/40 rounded-lg backdrop-blur-xs">
                                    {content?.link.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-1">
                                        {content?.link.title}
                                    </h4>
                                    <p className="text-sm text-zinc-600/80 dark:text-zinc-400/80">
                                        {content?.link.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-zinc-700/50">
                    <div className="flex items-center gap-5">
                        <button
                            onClick={onLike}
                            className={cn(
                                "flex items-center gap-1.5 text-sm p-2 -ml-2 rounded-full",
                                "transition-all duration-200",
                                engagement?.isLiked 
                                    ? "text-rose-600 dark:text-rose-400" 
                                    : "text-zinc-600/80 dark:text-zinc-400/80 hover:text-rose-600 dark:hover:text-rose-400",
                                "hover:bg-white/20 dark:hover:bg-zinc-800/50"
                            )}
                        >
                            <Heart className={cn("w-5 h-5", engagement?.isLiked && "fill-current")} />
                            <span>{engagement?.likes}</span>
                        </button>
                        <button
                            onClick={onComment}
                            className={cn(
                                "flex items-center gap-1.5 text-sm p-2 -ml-2 rounded-full",
                                "text-zinc-600/80 dark:text-zinc-400/80 hover:text-blue-600 dark:hover:text-blue-400",
                                "hover:bg-white/20 dark:hover:bg-zinc-800/50"
                            )}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{engagement?.comments}</span>
                        </button>
                        <button
                            onClick={onShare}
                            className={cn(
                                "flex items-center gap-1.5 text-sm p-2 -ml-2 rounded-full",
                                "text-zinc-600/80 dark:text-zinc-400/80 hover:text-green-600 dark:hover:text-green-400",
                                "hover:bg-white/20 dark:hover:bg-zinc-800/50"
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
                            "transition-all duration-200",
                            engagement?.isBookmarked 
                                ? "text-zinc-900 dark:text-white" 
                                : "text-zinc-600/80 dark:text-zinc-400/80",
                            "hover:bg-white/20 dark:hover:bg-zinc-800/50"
                        )}
                    >
                        <Bookmark className={cn("w-5 h-5", engagement?.isBookmarked && "fill-current")} />
                    </button>
                </div>
            </div>
        </div>
    );
}