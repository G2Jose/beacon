export interface Message {
  message: string
  date: Date
  from: string
  to: string
}

export interface Chat {
  participants: string[]
  messages: Message[]
  id: string
}

export interface ChatList {
  chats: Chat[]
}
