"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDashboardContext } from "../../context/Dashboard/DashboardContext";

export default function FoodTable() {
  const [periodType, setPeriodType] = useState("day");
  const [currentPeriod, setCurrentPeriod] = useState("9 Nov 2025");
  const { generatePDF , generateExcel , generateCsv }  = useDashboardContext();

const dummyData = [
  { id: 1, foodName: "Boiled Eggs", quantity: "5 pcs", calories: "390 kcal", price: "₹40", notes: "Breakfast protein source", aiRate: "Excellent" },
  { id: 2, foodName: "Banana", quantity: "2 pcs", calories: "180 kcal", price: "₹10", notes: "Post workout", aiRate: "Good" },
  { id: 3, foodName: "Peanuts", quantity: "80g", calories: "450 kcal", price: "₹20", notes: "Evening snack", aiRate: "Moderate" },
  { id: 4, foodName: "Apple", quantity: "1 pc", calories: "95 kcal", price: "₹25", notes: "Morning fruit", aiRate: "Excellent" },
  { id: 5, foodName: "Oats with Milk", quantity: "1 bowl", calories: "280 kcal", price: "₹30", notes: "Fiber-rich breakfast", aiRate: "Good" },
  { id: 6, foodName: "Brown Bread", quantity: "2 slices", calories: "160 kcal", price: "₹15", notes: "With peanut butter", aiRate: "Good" },
  { id: 7, foodName: "Paneer Bhurji", quantity: "150g", calories: "320 kcal", price: "₹50", notes: "High protein lunch", aiRate: "Excellent" },
  { id: 8, foodName: "Rice and Dal", quantity: "1 plate", calories: "420 kcal", price: "₹60", notes: "Balanced Indian meal", aiRate: "Good" },
  { id: 9, foodName: "Grilled Chicken", quantity: "200g", calories: "380 kcal", price: "₹120", notes: "Lunch protein", aiRate: "Excellent" },
  { id: 10, foodName: "Chole Bhature", quantity: "1 plate", calories: "520 kcal", price: "₹70", notes: "Heavy brunch", aiRate: "Moderate" },
  { id: 11, foodName: "Masala Dosa", quantity: "1 pc", calories: "420 kcal", price: "₹50", notes: "South Indian breakfast", aiRate: "Good" },
  { id: 12, foodName: "Poha", quantity: "1 bowl", calories: "270 kcal", price: "₹25", notes: "Light breakfast", aiRate: "Good" },
  { id: 13, foodName: "Sprout Salad", quantity: "1 bowl", calories: "150 kcal", price: "₹30", notes: "Evening snack", aiRate: "Excellent" },
  { id: 14, foodName: "Milk", quantity: "250 ml", calories: "160 kcal", price: "₹20", notes: "Morning drink", aiRate: "Excellent" },
  { id: 15, foodName: "Green Tea", quantity: "1 cup", calories: "2 kcal", price: "₹10", notes: "Morning refreshment", aiRate: "Excellent" },
  { id: 16, foodName: "Black Coffee", quantity: "1 cup", calories: "4 kcal", price: "₹15", notes: "Pre-workout", aiRate: "Good" },
  { id: 17, foodName: "Protein Shake", quantity: "300 ml", calories: "250 kcal", price: "₹100", notes: "Post-workout", aiRate: "Excellent" },
  { id: 18, foodName: "Roti and Sabji", quantity: "3 roti", calories: "400 kcal", price: "₹40", notes: "Homemade dinner", aiRate: "Good" },
  { id: 19, foodName: "Litti Chokha", quantity: "3 pcs", calories: "550 kcal", price: "₹60", notes: "Traditional meal", aiRate: "Moderate" },
  { id: 20, foodName: "Cucumber Salad", quantity: "1 bowl", calories: "50 kcal", price: "₹15", notes: "Dinner side", aiRate: "Excellent" },
  { id: 21, foodName: "Chapati & Chicken Curry", quantity: "2 chapati", calories: "450 kcal", price: "₹80", notes: "Dinner meal", aiRate: "Good" },
  { id: 22, foodName: "Sweet Corn Soup", quantity: "1 bowl", calories: "120 kcal", price: "₹40", notes: "Evening starter", aiRate: "Excellent" },
  { id: 23, foodName: "Biryani", quantity: "1 plate", calories: "600 kcal", price: "₹90", notes: "Weekend lunch", aiRate: "Moderate" },
  { id: 24, foodName: "Maggi", quantity: "1 packet", calories: "350 kcal", price: "₹25", notes: "Quick snack", aiRate: "Moderate" },
  { id: 25, foodName: "Vegetable Sandwich", quantity: "1 sandwich", calories: "280 kcal", price: "₹30", notes: "Evening snack", aiRate: "Good" },
  { id: 26, foodName: "Idli Sambar", quantity: "3 pcs", calories: "300 kcal", price: "₹40", notes: "Light breakfast", aiRate: "Excellent" },
  { id: 27, foodName: "Curd", quantity: "150g", calories: "90 kcal", price: "₹20", notes: "Digestive add-on", aiRate: "Excellent" },
  { id: 28, foodName: "Mixed Fruit Bowl", quantity: "1 bowl", calories: "200 kcal", price: "₹50", notes: "Evening dessert", aiRate: "Excellent" },
  { id: 29, foodName: "French Fries", quantity: "100g", calories: "310 kcal", price: "₹60", notes: "Cheat snack", aiRate: "Poor" },
  { id: 30, foodName: "Paneer Tikka", quantity: "200g", calories: "450 kcal", price: "₹90", notes: "Dinner starter", aiRate: "Good" },
];

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <Card className="rounded-3xl shadow-lg border border-orange-200">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <CardTitle className="text-xl font-semibold text-orange-700">
            🍱 Food Summary
          </CardTitle>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium">{currentPeriod}</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <Select value={periodType} onValueChange={setPeriodType}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => generatePDF(dummyData)}>PDF</DropdownMenuItem>
                <DropdownMenuItem onClick={() => generateExcel(dummyData)} >Excel</DropdownMenuItem>
                <DropdownMenuItem onClick={() => generateCsv(dummyData)}>CSV</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <Table>
              <TableHeader className="bg-orange-50">
                <TableRow>
                  <TableHead className="text-orange-700 font-semibold">Food Name</TableHead>
                  <TableHead className="text-orange-700 font-semibold">Quantity</TableHead>
                  <TableHead className="text-orange-700 font-semibold">Calories</TableHead>
                  <TableHead className="text-orange-700 font-semibold">Price</TableHead>
                  <TableHead className="text-orange-700 font-semibold">Notes</TableHead>
                  <TableHead className="text-orange-700 font-semibold">AI Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.foodName}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.calories}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.notes}</TableCell>
                    <TableCell
                      className={
                        item.aiRate === "Excellent"
                          ? "text-green-600 font-medium"
                          : item.aiRate === "Good"
                          ? "text-blue-600 font-medium"
                          : "text-yellow-600 font-medium"
                      }
                    >
                      {item.aiRate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
