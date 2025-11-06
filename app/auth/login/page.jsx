"use client";

import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("login", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    setLoading(false);
    if (res.ok) router.push("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-2">nutriPro</h1>
        <p className="text-gray-500 text-center text-sm mb-6">
          Your one step solution to health choices and nutrition
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-70"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Signing…
              </>
            ) : (
              "Sign in"
            )}
          </button>

          <button
            type="button"
            onClick={() => router.push("/forget")}
            className="text-sm text-blue-600 hover:underline w-full text-right"
          >
            Forgot password?
          </button>
        </form>

        <div className="my-6 border-t relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">
            or continue with
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex items-center justify-center gap-2 w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <Github size={20} />
            GitHub
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center gap-2 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <Mail size={20} />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
