export interface Message {
  message: string
  date: Date
  from: string
  to: string
}

export interface Chat {
  participants: string[]
  messages: Message[]
}

export interface ChatList {
  chats: Chat[]
}
