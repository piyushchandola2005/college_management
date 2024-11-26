"use client"

import { useState, useEffect } from "react"
import { Bot, X, MessageCircle, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  type: "user" | "bot"
  content: string
}

const subjectAttendance = {
  "DAA": "27/30",
  "DBMS": "24/30",
  "AI": "28/30",
  "WT": "26/30"
}

const facultyContacts = {
  "DAA": "Mr. Vivek: +91 98765 43210",
  "DBMS": "Mr. Ashish: +91 87654 32109",
  "AI": "Mr. Tyagi: +91 76543 21098",
  "WT": "Mr. Ashish: +91 87654 32109"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  useEffect(() => {
    setMessages([
      {
        type: "bot",
        content: "👋 Hi Anubhav! I'm Ease Buddy, your colorful AttendEase assistant. How can I brighten your day?",
      },
    ])
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { type: "user", content: input }])

    const response = generateResponse(input.toLowerCase())
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content: response }])
    }, 500)

    setInput("")
  }

  const generateResponse = (input: string): string => {
    if (input.includes("attendance")) {
      const subject = Object.keys(subjectAttendance).find(sub => input.includes(sub.toLowerCase()))
      if (subject) {
        return `📊 Your attendance for ${subject} is ${subjectAttendance[subject]}. Keep up the good work! 🌟`
      }
      return "📚 Here's your colorful attendance report:\n" +
        Object.entries(subjectAttendance).map(([subject, attendance]) => 
          `${subject}: ${attendance} ${getAttendanceEmoji(attendance)}`
        ).join("\n")
    }
    
    if (input.includes("faculty") || input.includes("contact")) {
      return "📞 Here are the faculty contact details:\n" +
        Object.entries(facultyContacts).map(([subject, contact]) => 
          `${subject}: ${contact}`
        ).join("\n")
    }
    
    if (input.includes("timetable") || input.includes("schedule")) {
      return "🗓️ Your vibrant timetable is displayed on the dashboard. It's a rainbow of knowledge waiting for you! Check the Time Table menu for a full spectrum of your weekly schedule."
    }
    
    if (input.includes("assignment") || input.includes("deadline")) {
      return "📝 Assignment alert! Check the Announcements section for upcoming deadlines. Submit your masterpieces through the portal and watch your progress sparkle on the dashboard! ✨"
    }
    
    if (input.includes("exam") || input.includes("examination")) {
      return "📚 Exam time is your time to shine! Access schedules, hall tickets, and results through the Examination menu. We've also got practice tests to help you become a quiz wizard! 🧙‍♂️"
    }
    
    if (input.includes("leave") || input.includes("absent")) {
      return "🏖️ Need a break? Apply for leave through the portal. We'll notify your faculty faster than you can say 'vacation'! Don't forget to check 'Teachers on leave' to stay in the loop."
    }
    
    if (input.includes("password") || input.includes("login")) {
      return "🔐 Keep your account safe! Change your password through the Change Password option. Mix letters, numbers, and special characters for a password cocktail that's hard to crack!"
    }

    return "🌈 I'm not sure about that, but I'm always eager to learn! Could you rephrase your question? I'm great with attendance, timetables, assignments, exams, leave applications, or tech support!"
  }

  const getAttendanceEmoji = (attendance: string) => {
    const [present, total] = attendance.split('/').map(Number)
    const percentage = (present / total) * 100
    if (percentage >= 90) return "🏆"
    if (percentage >= 75) return "👍"
    if (percentage >= 60) return "😊"
    return "😟"
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-lg md:w-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 border-2 border-purple-300 dark:border-purple-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Bot className="h-6 w-6" />
              Ease Buddy
            </CardTitle>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <ScrollArea className="h-[400px] pr-4">
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-white dark:bg-gray-800 shadow-md"
                      } max-w-[85%] animate-fade-in-up`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend()
                  }
                }}
                className="bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-700 focus:ring-purple-500 focus:border-purple-500"
              />
              <Button onClick={handleSend} size="icon" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

