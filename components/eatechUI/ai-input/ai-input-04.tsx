"use client"

import { SendHorizontal, Paperclip, X, Smile, Mic, MicOff } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useFileInput } from "@/hooks/use-file-input"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface FileDisplayProps {
  fileName: string
  onClear: () => void
}

const FileDisplay = ({ fileName, onClear }: FileDisplayProps) => (
  <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 w-fit px-3 py-1 rounded-lg border dark:border-white/10">
    <span className="text-sm dark:text-white truncate max-w-[200px]">{fileName}</span>
    <button
      type="button"
      onClick={onClear}
      className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
    >
      <X className="w-3 h-3 dark:text-white" />
    </button>
  </div>
)

// Sample emoji data
const emojis = ["😀", "😂", "🙂", "😍", "🤔", "👍", "🎉", "🔥", "💯", "⭐", "❤️", "👋", "🤖", "💡", "✨"]

export default function AIInputEmoji() {
  const [inputValue, setInputValue] = useState<string>("")
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const { fileName, fileInputRef, handleFileSelect, clearFile } = useFileInput({
    accept: "image/*,video/*",
    maxSize: 10,
  })

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  })

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log("Submitting:", inputValue, fileName ? "with file" : "")
      setInputValue("")
      adjustHeight(true)
    }
  }

  const insertEmoji = (emoji: string) => {
    setInputValue((prev) => prev + emoji)
    setTimeout(() => adjustHeight(), 0)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real implementation, this would start/stop voice recording
    if (!isRecording) {
      console.log("Starting voice recording...")
    } else {
      console.log("Stopping voice recording...")
      // Simulate adding transcribed text
      setInputValue((prev) => prev + " [Voice transcription would appear here]")
      setTimeout(() => adjustHeight(), 0)
    }
  }

  return (
    <div className="w-full py-3 px-2">
      <div className="relative max-w-xl w-full mx-auto flex flex-col gap-2">
        {fileName && <FileDisplay fileName={fileName} onClear={clearFile} />}

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-3 pt-2">
            <button
              type="button"
              className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Attach file</span>
            </button>

            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Smile className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Insert emoji</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2" align="start" side="top">
                <div className="grid grid-cols-5 gap-2">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      className="text-xl p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => insertEmoji(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <button
              type="button"
              className={cn(
                "p-1.5 rounded-full transition-colors",
                isRecording
                  ? "bg-red-100 dark:bg-red-900/30 text-red-500"
                  : "hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400",
              )}
              onClick={toggleRecording}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              <span className="sr-only">{isRecording ? "Stop recording" : "Start voice input"}</span>
            </button>
          </div>

          <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileSelect} />

          <Textarea
            placeholder="Type a message or use voice input..."
            className={cn(
              "bg-transparent w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              "text-black dark:text-white px-3 py-2",
              "text-sm",
              "max-h-[200px] overflow-y-auto resize-none",
              "min-h-[52px]",
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              adjustHeight()
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
              }
            }}
          />

          <div className="px-3 pb-2 flex justify-end">
            <button
              className={cn(
                "rounded-full p-2 transition-colors",
                inputValue.trim()
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500",
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
    </div>
  )
}
