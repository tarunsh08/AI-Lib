import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";

interface Card03Props {
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

export function Card_03({
    author,
    content,
    engagement,
    onLike,
    onComment,
    onShare,
    onBookmark,
}: Card03Props) {
    return (
        <div className={cn(
            "w-full max-w-xl mx-auto",
            "bg-zinc-900",
            "border-l-4 border-blue-500",
            "rounded-r-xl",
            "shadow-lg",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-blue-500/20 hover:translate-x-1"
        )}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                        <img
                            src={author?.avatar}
                            alt={author?.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/50"
                        />
                        <div>
                            <h3 className="text-base font-semibold text-white">
                                {author?.name}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                @{author?.username} · {author?.timeAgo}
                            </p>
                        </div>
                    </div>
                    <button className="text-zinc-400 hover:text-white">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                    {content?.text}
                </p>

                {content?.link && (
                    <div className="mb-6 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                {content?.link.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white mb-1">
                                    {content?.link.title}
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    {content?.link.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={onLike}
                            className={cn(
                                "flex items-center gap-2 text-sm",
                                engagement?.isLiked ? "text-rose-500" : "text-zinc-400 hover:text-rose-500"
                            )}
                        >
                            <Heart className={cn("w-5 h-5", engagement?.isLiked && "fill-current")} />
                            <span>{engagement?.likes}</span>
                        </button>
                        <button
                            onClick={onComment}
                            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-500"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{engagement?.comments}</span>
                        </button>
                        <button
                            onClick={onShare}
                            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-500"
                        >
                            <Share2 className="w-5 h-5" />
                            <span>{engagement?.shares}</span>
                        </button>
                    </div>
                    <button
                        onClick={onBookmark}
                        className={cn(
                            "text-zinc-400 hover:text-white",
                            engagement?.isBookmarked && "text-white"
                        )}
                    >
                        <Bookmark className={cn("w-5 h-5", engagement?.isBookmarked && "fill-current")} />
                    </button>
                </div>
            </div>
        </div>
    );
}