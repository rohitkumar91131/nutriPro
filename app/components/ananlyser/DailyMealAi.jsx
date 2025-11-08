"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Heart } from "lucide-react"

export default function ChatApp() {
  const [messages, setMessages] = React.useState([
    { id: 1, sender: "ai", text: "Hello 👋 How can I assist you today?" },
    { id: 2, sender: "user", text: "Tell me about my nutrition intake." },
  ])
  const [input, setInput] = React.useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: input }])
    setInput("")
  }

  return (
    <Card className="w-full max-w-lg mx-auto flex flex-col h-[500px] border border-gray-200 rounded-2xl shadow-md overflow-hidden">
      <CardHeader className="border-b bg-gray-50">
        <CardTitle className="text-lg font-semibold text-gray-800">Meal Ai</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </CardContent>

      <div className="border-t p-3 bg-gray-50 flex items-center gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button size="icon" variant="ghost" className="text-pink-500 hover:text-pink-600">
          <Heart className="w-5 h-5" />
        </Button>
        <Button onClick={handleSend} size="icon" className="bg-blue-500 hover:bg-blue-600">
          <Send className="w-5 h-5 text-white" />
        </Button>
      </div>
    </Card>
  )
}
