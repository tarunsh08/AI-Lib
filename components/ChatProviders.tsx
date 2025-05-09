'use client'

import { useEffect } from 'react'
import type { BotpressConfig, BotpressEvent } from '../types/botpress'

const BOTPRESS_CONFIGS: Array<{
  scriptUrl: string;
  initConfig: BotpressConfig;
}> = [
  {
    scriptUrl: 'https://cdn.botpress.cloud/webchat/v2.4/inject.js',
    initConfig: {
      botId: 'your-main-bot-id',
      hostUrl: 'https://your-botpress-instance.com',
      botName: 'Main Assistant',
      avatarUrl: '/bot-avatar.png',
      stylesheet: 'https://your-cdn.com/custom-styles.css'
    }
  },
  {
    scriptUrl: 'https://files.bpcontent.cloud/2025/05/07/21/20250507214844-ZGIK9VLL.js',
    initConfig: {
      botId: 'your-secondary-bot-id',
      hostUrl: 'https://your-other-botpress-instance.com',
      botName: 'Specialist Bot',
      containerWidth: '350px',
      layoutWidth: '350px'
    }
  }
]

export default function ChatProviders() {
  useEffect(() => {
    const loadBot = async (scriptUrl: string, config: BotpressConfig) => {
      return new Promise<void>((resolve) => {
        const script = document.createElement('script')
        script.src = scriptUrl
        script.async = true
        script.onload = () => {
          if (window.botpressWebChat && window.botpressWebChat.init) {
            window.botpressWebChat.init(config)

            // Optional: Handle bot events
            if (window.botpressWebChat.onEvent) {
              window.botpressWebChat.onEvent((event: BotpressEvent) => {
                console.log('Botpress event:', event)
                // Handle specific events here
              })
            }
          } else {
            console.error('Botpress WebChat not available after loading script')
          }

          resolve()
        }
        script.onerror = () => {
          console.error(`Failed to load bot script: ${scriptUrl}`)
          resolve() 
        }
        document.body.appendChild(script)
      })
    }

    const loadAllBots = async () => {
      try {
        // Load bots sequentially to avoid conflicts
        for (const { scriptUrl, initConfig } of BOTPRESS_CONFIGS) {
          await loadBot(scriptUrl, initConfig)
        }
      } catch (error) {
        console.error('Error loading bots:', error)
      }
    }

    loadAllBots()

    return () => {
      // Cleanup all bot containers if they exist
      document.querySelectorAll('.bp-web-chat').forEach(el => {
        el.remove()
      })
    }
  }, [])

  return null
}
