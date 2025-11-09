"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FoodTable() {
  const foods = [
    { foodName: "Boiled Eggs", quantity: "3 pieces", calories: 210, notes: "Breakfast" },
    { foodName: "Banana", quantity: "2 pieces", calories: 180, notes: "Morning snack" },
    { foodName: "Roti + Sabji", quantity: "3 roti + 1 bowl", calories: 400, notes: "Lunch" },
    { foodName: "Litti Chokha", quantity: "3 litti", calories: 450, notes: "Dinner" },
    { foodName: "Guava", quantity: "150g", calories: 90, notes: "Night fruit" },
  ];

  const totalCalories = foods.reduce((sum, item) => sum + item.calories, 0);

  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-lg border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">
          Today's Food Log
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Food</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {foods.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.foodName}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.calories}</TableCell>
                <TableCell>{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="text-right mt-4 font-semibold">
          Total Calories: {totalCalories} kcal
        </div>
      </CardContent>
    </Card>
  );
}
