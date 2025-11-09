"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FoodForm() {
  const [form, setForm] = useState({
    foodName: "",
    quantity: "",
    calories: "",
    price: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border border-orange-200 rounded-3xl backdrop-blur-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-orange-700">
            🍽 What Did You Eat?
          </CardTitle>
          <p className="text-sm text-gray-500">Track your meals easily</p>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="foodName" className="text-sm text-gray-700">
                Food Name
              </Label>
              <Input
                id="foodName"
                name="foodName"
                placeholder="e.g. Boiled Eggs"
                value={form.foodName}
                onChange={handleChange}
                className="focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-sm text-gray-700">
                Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                placeholder="e.g. 3 pieces or 150g"
                value={form.quantity}
                onChange={handleChange}
                className="focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="calories" className="text-sm text-gray-700">
                  Calories (optional)
                </Label>
                <Input
                  id="calories"
                  name="calories"
                  placeholder="e.g. 250 kcal"
                  value={form.calories}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm text-gray-700">
                  Price (₹)
                </Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="e.g. 50"
                  value={form.price}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm text-gray-700">
                Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any details about ingredients or timing..."
                value={form.notes}
                onChange={handleChange}
                className=" h-24 resize-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Add Entry
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
