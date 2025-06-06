'use client'

import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Link as LinkIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface FuturisticCardProps {
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
    backgroundImage?: string;
}

export function FuturisticCard({
    author = {
        name: "Nova Specter",
        username: "quantum_agent",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
        timeAgo: "just now"
    },
    content = {
        text: "Accessing quantum network... Transmission secured. Neural interface active. Ready for data stream.",
        link: {
            title: "Quantum Database v4.2",
            description: "Top secret clearance required",
            icon: <LinkIcon className="w-5 h-5 text-cyan-400" />
        }
    },
    engagement = {
        likes: 4242,
        comments: 128,
        shares: 256,
        isLiked: true,
        isBookmarked: false
    },
    onLike,
    onComment,
    onShare,
    onBookmark,
    backgroundImage = "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
}: FuturisticCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            card.style.setProperty('--mouse-x', x.toString());
            card.style.setProperty('--mouse-y', y.toString());
        };

        card.addEventListener('mousemove', handleMouseMove);
        return () => card.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            ref={cardRef}
            className={cn(
                "relative w-full max-w-2xl mx-auto",
                "bg-zinc-900/80 backdrop-blur-md",
                "border border-zinc-700/50",
                "rounded-2xl overflow-hidden",
                "transition-all duration-500 ease-out",
                "hover:shadow-[0_0_30px_-5px_rgba(100,220,255,0.3)]",
                "group"
            )}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Holographic grid overlay */}
            <div className={cn(
                "absolute inset-0 pointer-events-none",
                "bg-[radial-gradient(circle_at_center,_rgba(100,220,255,0.05)_0%,_transparent_70%)]",
                "opacity-40 group-hover:opacity-60",
                "transition-opacity duration-300"
            )} />
            
            {/* Animated border effect */}
            <div className={cn(
                "absolute inset-0 rounded-2xl pointer-events-none",
                "border-[0.5px] border-transparent",
                "group-hover:border-cyan-400/30",
                "transition-all duration-500"
            )} />
            
            {/* Glow effect */}
            <div 
                className={cn(
                    "absolute inset-0 rounded-2xl pointer-events-none",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-500",
                    "bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),_rgba(100,220,255,0.1)_0%,_transparent_70%]"
                )}
                style={{
                    // @ts-ignore
                    '--mouse-x': '0.5',
                    '--mouse-y': '0.5'
                }}
            />

            <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className={cn(
                                "absolute -inset-0.5 rounded-full",
                                "bg-gradient-to-r from-cyan-400 to-blue-500",
                                "opacity-70 blur-sm",
                                "animate-pulse"
                            )} />
                            <img
                                src={author?.avatar}
                                alt={author?.name}
                                className={cn(
                                    "relative w-12 h-12 rounded-full",
                                    "ring-2 ring-cyan-400/50",
                                    "object-cover",
                                    "transition-transform duration-300",
                                    "group-hover:scale-105"
                                )}
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-cyan-100 tracking-tight">
                                {author?.name}
                            </h3>
                            <p className="text-sm text-cyan-400/80 tracking-tight">
                                @{author?.username} · {author?.timeAgo}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className={cn(
                            "p-2 rounded-full",
                            "bg-zinc-800/50 backdrop-blur-sm",
                            "border border-zinc-700/50",
                            "text-cyan-400/80 hover:text-cyan-200",
                            "transition-all duration-200",
                            "hover:bg-zinc-800/70",
                            "active:bg-zinc-800",
                            "focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                        )}
                    >
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-cyan-100/90 mb-6 leading-relaxed tracking-wide font-light">
                    {content?.text}
                </p>

                {content?.link && (
                    <div
                        className={cn(
                            "mb-6 rounded-xl overflow-hidden",
                            "bg-zinc-800/50 backdrop-blur-sm",
                            "border border-zinc-700/50",
                            "group/link cursor-pointer",
                            "transition-all duration-300",
                            "hover:border-cyan-400/30",
                            "hover:shadow-[0_0_15px_-5px_rgba(100,220,255,0.3)]"
                        )}
                    >
                        <div
                            className={cn(
                                "p-4",
                                "bg-gradient-to-b from-zinc-800/30 to-zinc-800/50",
                                "group-hover/link:from-zinc-800/50 group-hover/link:to-zinc-800/70",
                                "transition-colors duration-300"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-400/10 rounded-lg backdrop-blur-xs border border-cyan-400/20">
                                    {content?.link.icon}
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-cyan-100 mb-1">
                                        {content?.link.title}
                                    </h4>
                                    <p className="text-sm text-cyan-400/70">
                                        {content?.link.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            onClick={onLike}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium p-2 rounded-full",
                                "bg-zinc-800/50 backdrop-blur-sm",
                                "border border-zinc-700/50",
                                "transition-all duration-300",
                                engagement?.isLiked
                                    ? "text-rose-400 border-rose-400/30 bg-rose-400/10"
                                    : "text-zinc-400 hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10"
                            )}
                        >
                            <Heart
                                className={cn(
                                    "w-5 h-5",
                                    "transition-all duration-300",
                                    engagement?.isLiked && "fill-current animate-pulse"
                                )}
                            />
                            <span>{engagement?.likes}</span>
                        </button>
                        <button
                            type="button"
                            onClick={onComment}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium p-2 rounded-full",
                                "bg-zinc-800/50 backdrop-blur-sm",
                                "border border-zinc-700/50",
                                "text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10",
                                "transition-all duration-300"
                            )}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>{engagement?.comments}</span>
                        </button>
                        <button
                            type="button"
                            onClick={onShare}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium p-2 rounded-full",
                                "bg-zinc-800/50 backdrop-blur-sm",
                                "border border-zinc-700/50",
                                "text-zinc-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10",
                                "transition-all duration-300"
                            )}
                        >
                            <Share2 className="w-5 h-5" />
                            <span>{engagement?.shares}</span>
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={onBookmark}
                        className={cn(
                            "p-2 rounded-full",
                            "bg-zinc-800/50 backdrop-blur-sm",
                            "border border-zinc-700/50",
                            "transition-all duration-300",
                            engagement?.isBookmarked
                                ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
                                : "text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                        )}
                    >
                        <Bookmark
                            className={cn(
                                "w-5 h-5",
                                "transition-all duration-300",
                                engagement?.isBookmarked && "fill-current"
                            )}
                        />
                    </button>
                </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/50 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/50 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/50 rounded-br-2xl" />
        </div>
    );
}