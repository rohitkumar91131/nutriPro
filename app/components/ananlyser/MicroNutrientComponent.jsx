"use client"
import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts"

export default function NutrientChart() {
  const data = [
    // ⚡ Essential Minerals
    { name: "Calcium", value: 68 },
    { name: "Iron", value: 52 },
    { name: "Magnesium", value: 74 },
    { name: "Phosphorus", value: 61 },
    { name: "Potassium", value: 82 },
    { name: "Sodium", value: 58 },
    { name: "Zinc", value: 64 },
    { name: "Copper", value: 47 },
    { name: "Manganese", value: 71 },
    { name: "Selenium", value: 66 },
    { name: "Iodine", value: 55 },
    { name: "Chromium", value: 42 },
    { name: "Molybdenum", value: 63 },

    // ☀️ Vitamins
    { name: "Vitamin A", value: 88 },
    { name: "Vitamin B1 (Thiamine)", value: 75 },
    { name: "Vitamin B2 (Riboflavin)", value: 68 },
    { name: "Vitamin B3 (Niacin)", value: 72 },
    { name: "Vitamin B5 (Pantothenic Acid)", value: 63 },
    { name: "Vitamin B6", value: 77 },
    { name: "Vitamin B7 (Biotin)", value: 58 },
    { name: "Vitamin B9 (Folate)", value: 84 },
    { name: "Vitamin B12", value: 46 },
    { name: "Vitamin C", value: 92 },
    { name: "Vitamin D", value: 49 },
    { name: "Vitamin E", value: 70 },
    { name: "Vitamin K", value: 65 },
  ]

  const COLORS = [
    "#3b82f6",
    "#06b6d4",
    "#8b5cf6",
    "#f59e0b",
    "#10b981",
    "#ec4899",
    "#f97316",
    "#a855f7",
    "#0ea5e9",
    "#84cc16",
  ]

  return (
    <Card className="h-[100dvh] w-full max-w-5xl mx-auto bg-white text-gray-900 rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">
          🧬 Full Micronutrient Intake Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[700px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 80, bottom: 10 }}
          >
            <XAxis type="number" domain={[0, 100]} tick={{ fill: "#4b5563" }} />
            <YAxis
              dataKey="name"
              type="category"
              width={160}
              tick={{ fill: "#4b5563", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "#111827"
              }}
              formatter={(value) => [`${value}%`, "Intake"]}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
