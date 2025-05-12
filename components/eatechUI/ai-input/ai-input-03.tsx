"use client";

import { SendHorizontal, Paperclip, X } from 'lucide-react';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFileInput } from "@/hooks/use-file-input";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface FileDisplayProps {
  fileName: string;
  onClear: () => void;
}

const FileDisplay = ({ fileName, onClear }: FileDisplayProps) => (
  <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 w-fit px-2 py-0.5 rounded-md text-xs border dark:border-white/10">
    <span className="dark:text-white truncate max-w-[150px]">{fileName}</span>
    <button
      type="button"
      onClick={onClear}
      className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
    >
      <X className="w-3 h-3 dark:text-white" />
    </button>
  </div>
);

export default function AIInputMinimal() {
  const [inputValue, setInputValue] = useState<string>("");
  const { fileName, fileInputRef, handleFileSelect, clearFile } =
    useFileInput({ accept: "image/*", maxSize: 5 });

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 40,
    maxHeight: 160,
  });

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log("Submitting:", inputValue, fileName ? "with file" : "");
      setInputValue("");
      adjustHeight(true);
    }
  };

  return (
    <div className="w-full py-2 px-2">
      <div className="relative max-w-xl w-full mx-auto flex flex-col gap-1">
        {fileName && <FileDisplay fileName={fileName} onClear={clearFile} />}

        <div className="relative flex items-center bg-black/5 dark:bg-white/5 rounded-lg border-none">
          <button
            type="button"
            className="flex items-center justify-center h-8 w-8 ml-1"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip className="w-4 h-4 text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors" />
          </button>

          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />

          <Textarea
            placeholder="Message..."
            className={cn(
              "bg-transparent w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-black/50 dark:placeholder:text-white/50",
              "text-black dark:text-white py-2 px-1",
              "text-sm",
              "max-h-[160px] overflow-y-auto resize-none",
              "min-h-[40px]"
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          <button
            className={cn(
              "flex items-center justify-center h-8 w-8 mr-1 rounded-full transition-colors",
              inputValue.trim() ? "text-black dark:text-white" : "text-black/30 dark:text-white/30"
            )}
            type="button"
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
          >
            <SendHorizontal className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
