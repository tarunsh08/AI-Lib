// types/botpress.d.ts
export {}; // This makes the file a module

declare global {
  interface Window {
    botpressWebChat: {
      init: (config: BotpressConfig) => void;
      onEvent: (callback: (event: BotpressEvent) => void) => void;
      sendEvent?: (event: { type: string; [key: string]: any }) => void;
      close?: () => void;
      show?: () => void;
      hide?: () => void;
    };
  }
}

export interface BotpressConfig {
  botId: string;
  hostUrl: string;
  clientId?: string;
  botName?: string;
  avatarUrl?: string;
  stylesheet?: string;
  containerWidth?: string; 
  layoutWidth?: string;    
  container?: {
    position?: 'bottom-right' | 'bottom-left' | 'full';
    width?: string;
    height?: string;
  };
  messagingUrl?: string;
  enablePersist?: boolean;
  showConversationsButton?: boolean;
  disableAnimations?: boolean;
  hideWidget?: boolean;
  userId?: string;
  userExtraData?: Record<string, any>;
}

export interface BotpressEvent {
  type: string;
  channel?: string;
  direction?: 'incoming' | 'outgoing';
  payload?: {
    type: string;
    text?: string;
    data?: any;
  };
  botId?: string;
  threadId?: string;
  target?: string;
  // Common event types:
  // 'LIFECYCLE.LOADED'
  // 'MESSAGE.SENT'
  // 'MESSAGE.RECEIVED'
  // 'UI.OPENED'
  // 'UI.CLOSED'
}