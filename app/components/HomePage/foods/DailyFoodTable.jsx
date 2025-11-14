"use client";

import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star, Loader2 } from "lucide-react";

export default function DailyFoodTable() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch foods from API
  const fetchFoods = async () => {
    try {
      const res = await fetch("/api/foods/me", { cache: "no-store" });
      const data = await res.json();
      setFoods(data.foods || []);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-4xl shadow-xl border border-orange-200 rounded-2xl">
        
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-orange-700 text-center">
            Today’s Food (Aaj Ka Khana) 🍽️
          </CardTitle>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin size-8 text-orange-500" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-orange-50 hover:bg-orange-100/60">
                  <TableHead className="font-bold text-orange-700">Food</TableHead>
                  <TableHead className="font-bold text-orange-700">Quantity</TableHead>
                  <TableHead className="font-bold text-orange-700">Calories</TableHead>
                  <TableHead className="font-bold text-orange-700">Price (₹)</TableHead>
                  <TableHead className="font-bold text-orange-700">AI Rating</TableHead>
                  <TableHead className="font-bold text-orange-700">Notes</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {foods.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-6 text-gray-500"
                    >
                      No food entries added today.
                    </TableCell>
                  </TableRow>
                ) : (
                  foods.map((food) => (
                    <TableRow
                      key={food._id}
                      className="hover:bg-orange-50 transition-all"
                    >
                      <TableCell className="font-semibold">
                        {food.foodName}
                      </TableCell>

                      <TableCell>{food.quantity}</TableCell>

                      <TableCell>{food.calories || "-"}</TableCell>

                      <TableCell>{food.price || "-"}</TableCell>

                      {/* AI Rating */}
                      <TableCell className="flex items-center gap-1">
                        <Star
                          fill={food.aiRating ? "#f59e0b" : "none"}
                          stroke="#f59e0b"
                          className="w-5 h-5"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          {food.aiRating ? `${food.aiRating}/5` : "—"}
                        </span>
                      </TableCell>

                      <TableCell className="text-gray-600">
                        {food.notes || "-"}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
