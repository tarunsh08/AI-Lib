"use client";

import {
    useActionState,
    useEffect,
    useState,
    useTransition,
    useRef,
    type RefObject,
} from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Copy, Check, CheckCheck, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { copyComponent } from "@/lib/action";


const PreviewContent = ({link, prePath, isBlock = false}: {
    link: string;
    prePath: string;
    isBlock?: boolean;
}) => {
    const [isPending, startTransition] = useTransition();
    const [state, formAction] = useActionState(copyComponent, {
        error: "",
        content: "",
        success: false,
    });
    const [showLoginDialog, setShowLoginDialog] = useState(false)
    const [isCopied, setIsCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTerminalCopied, setIsTerminalCopied] = useState(false);

    const handleCopyClick = async () => {
        const [folder, filename] = link.split("/");

        startTransition(async () => {
            const formData = new FormData();
            formData.append("folder", folder);
            formData.append("fileName", filename);

            formAction(formData);
        });
    };

    const getFileName = () => {
        const [folder, filename] = link.split("/");
        return filename ? filename : folder;
    };

    const handleTerminalClick = () => {
        const [folder, filename] = link.split("/");
        const COPY = `bunx shadcn@latest add ${prePath}/r/${
            filename ? filename : folder
        }.json`;
        navigator.clipboard.writeText(COPY);
        setIsTerminalCopied(true);
        setTimeout(() => {
            setIsTerminalCopied(false);
        }, 1000);
    };


  return (
    <AnimatePresence>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="fixed w-1 h-1 bg-black dark:bg-white rounded-full"
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            x: [
                                0,
                                (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
                            ],
                            y: [0, -Math.random() * 50 - 20],
                        }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>
  )
}

export default PreviewContent
