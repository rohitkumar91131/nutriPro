import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function Hi() {
  const {data : session , status} = useSession();
  const [dummyName , setDummyName] = React.useState("Bro");

  useEffect(() => { 
    console.log("Session data in Hi component:", session);
    console.log("Session status in Hi component:", status);
  }, [session , status])  
  return (
    <div className="flex flex-col items-center justify-center text-white space-y-3 h-full w-full">
      <h1 className="text-3xl font-semibold text-black">Hi {session?.user?.name || dummyName}!</h1>
      <p className="text-gray-400 text-sm">
        Let’s look at your daily activity overview 👇
      </p>
    </div>
  );
}
