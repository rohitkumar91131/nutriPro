"use client"

import * as React from "react"
import { TrendingUp, CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Pie, PieChart, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export const description = "Nutrition donut chart showing carbs, proteins, and fats"

const chartData = [
  { nutrient: "Carbs", grams: 50, fill: "#3B82F6" },
  { nutrient: "Proteins", grams: 30, fill: "#22C55E" },
  { nutrient: "Fats", grams: 20, fill: "#FACC15" },
]

const chartConfig = {
  carbs: { label: "Carbs", color: "#3B82F6" },
  proteins: { label: "Proteins", color: "#22C55E" },
  fats: { label: "Fats", color: "#FACC15" },
}

export default function NutritionPieChart() {
  const [date, setDate] = React.useState(new Date())
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.grams, 0),
    []
  )

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <div className="flex items-center justify-between w-full">
          <div>
            <CardTitle>Macronutrient Breakdown</CardTitle>
            <CardDescription>Today's Intake</CardDescription>
          </div>

          {/* Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <CalendarIcon className="w-4 h-4" />
                {format(date, "PPP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="grams"
              nameKey="nutrient"
              innerRadius={60}
              outerRadius={100}
              label={({ name }) => name}
              labelLine={false}
              strokeWidth={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}g
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on your recent meals
        </div>
      </CardFooter>
    </Card>
  )
}
