import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return <p>You are not logged in</p>;

  const { user } = session;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      {user.image && (
        <img
          src={user.image}
          alt="User Avatar"
          className="mt-4 w-20 h-20 rounded-full border"
        />
      )}
    </div>
  );
}
