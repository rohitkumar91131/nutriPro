"use client"
import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain, ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react"

export default function AnalysisCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto ">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-extrabold flex items-center gap-2 text-cyan-400">
          <Brain className="w-6 h-6 text-cyan-400" />
          #Analysis
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="min-h-[120px] bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-slate-300 text-sm backdrop-blur-sm">
          Your AI-generated analysis or insights will appear here...
        </div>

        <Separator className="bg-slate-700" />

        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-emerald-400 mb-2">
            <ThumbsUp className="w-5 h-5" />
            #Pros
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
            <li>Highly scalable architecture</li>
            <li>Fast AI inference performance</li>
            <li>Clean UX and futuristic design</li>
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-rose-400 mb-2">
            <ThumbsDown className="w-5 h-5" />
            #Cons
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
            <li>High GPU dependency</li>
            <li>Complex deployment pipeline</li>
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-400 mb-2">
            <Lightbulb className="w-5 h-5" />
            #Improvements
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
            <li>Optimize model for edge devices</li>
            <li>Improve real-time data visualization</li>
            <li>Enhance user onboarding experience</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
