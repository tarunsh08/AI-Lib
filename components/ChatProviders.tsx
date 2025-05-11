'use client'

import { useEffect } from 'react'
import type { BotpressConfig, BotpressEvent } from '../types/botpress'

const BOTPRESS_CONFIG = {
  scriptUrls: [
    'https://cdn.botpress.cloud/webchat/v2.5/inject.js',
    'https://files.bpcontent.cloud/2025/05/07/21/20250507214844-ZGIK9VLL.js'
  ],
  initConfig: {
    botId: 'your-bot-id', 
    hostUrl: 'https://cdn.botpress.cloud/webchat/v2.5',
    botName: 'My Assistant',
    avatarUrl: '/bot-avatar.png', 
    containerWidth: '400px',
    layoutWidth: '400px',
    showBotInfoPage: true,
    enableTranscriptDownload: true,
  }
}

export default function ChatProviders() {
  useEffect(() => {
    const loadScript = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${url}"]`)
        if (existingScript) {
          existingScript.remove()
        }

        const script = document.createElement('script')
        script.src = url
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`))
        document.body.appendChild(script)
      })
    }

    const initializeBotpress = async () => {
      try {
        for (const url of BOTPRESS_CONFIG.scriptUrls) {
          await loadScript(url)
        }

        document.querySelectorAll('.bp-web-chat').forEach(el => el.remove())

        if (window.botpressWebChat?.init) {
          window.botpressWebChat.init(BOTPRESS_CONFIG.initConfig)
          
          window.botpressWebChat.onEvent?.((event: BotpressEvent) => {
            console.log('Botpress event:', event)
          })
        } else {
          console.error('Botpress WebChat not available after loading scripts')
        }
      } catch (error) {
        console.error('Error initializing Botpress:', error)
      }
    }

    initializeBotpress()

    return () => {
      document.querySelectorAll('.bp-web-chat').forEach(el => el.remove())
      BOTPRESS_CONFIG.scriptUrls.forEach(url => {
        const script = document.querySelector(`script[src="${url}"]`)
        if (script) script.remove()
      })
    }
  }, [])

  return null
}