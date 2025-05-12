"use client"

import { SendHorizontal, Paperclip, X, ChevronDown, Sparkles, Zap, Bot } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useFileInput } from "@/hooks/use-file-input"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

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

const models = [
  { id: "gpt-4o", name: "GPT-4o", icon: <Sparkles className="w-4 h-4 mr-2" />, description: "Most capable model" },
  { id: "gpt-3.5", name: "GPT-3.5", icon: <Zap className="w-4 h-4 mr-2" />, description: "Fast responses" },
  { id: "claude-3", name: "Claude 3", icon: <Bot className="w-4 h-4 mr-2" />, description: "Balanced performance" },
]

export default function AIInputAdvanced() {
  const [inputValue, setInputValue] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState(models[0])
  const { fileName, fileInputRef, handleFileSelect, clearFile } = useFileInput({
    accept: "image/*,application/pdf",
    maxSize: 10,
  })

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 240,
  })

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log(`Submitting to ${selectedModel.name}:`, inputValue, fileName ? "with file" : "")
      setInputValue("")
      adjustHeight(true)
    }
  }

  const maxLength = 4000
  const charCount = inputValue.length
  const isNearLimit = charCount > maxLength * 0.8
  const isAtLimit = charCount >= maxLength

  return (
    <div className="w-full py-4 px-2 sm:px-4">
      <div className="relative max-w-2xl w-full mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {selectedModel.icon}
                {selectedModel.name}
                <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {models.map((model) => (
                <DropdownMenuItem
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className="flex items-start gap-2"
                >
                  <div className="flex items-center">{model.icon}</div>
                  <div>
                    <div className="font-medium">{model.name}</div>
                    <div className="text-xs text-muted-foreground">{model.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {fileName && <FileDisplay fileName={fileName} onClear={clearFile} />}
        </div>

        <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <Textarea
            placeholder={`Message ${selectedModel.name}...`}
            className={cn(
              "bg-transparent w-full rounded-t-xl",
              "border-x-0 border-t-0 border-b border-gray-200 dark:border-gray-800",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              "text-black dark:text-white px-4 py-3",
              "text-sm",
              "max-h-[240px] overflow-y-auto resize-none",
              "min-h-[60px]",
              isAtLimit && "border-red-500 dark:border-red-500",
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) {
                setInputValue(e.target.value)
                adjustHeight()
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
              }
            }}
            maxLength={maxLength}
          />

          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Attach file</span>
              </button>

              <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileSelect} />

              <div
                className={cn(
                  "text-xs",
                  isNearLimit ? (isAtLimit ? "text-red-500" : "text-amber-500") : "text-gray-400 dark:text-gray-500",
                )}
              >
                {charCount}/{maxLength}
              </div>
            </div>

            <button
              className={cn(
                "rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1",
                inputValue.trim()
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600",
              )}
              type="button"
              onClick={handleSubmit}
              disabled={!inputValue.trim() || isAtLimit}
            >
              <span className="text-sm font-medium">Send</span>
              <SendHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-xs text-center text-gray-500 dark:text-gray-400">
          {selectedModel.id === "gpt-4o" && (
            <Badge
              variant="outline"
              className="text-xs font-normal bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
            >
              Vision enabled
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
