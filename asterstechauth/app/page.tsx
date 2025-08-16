import Image from "next/image";
import Link from "next/link";

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Funnify: Make Anything Funny
      </h1>

      <nav className="space-y-4">
        <Link
          href="/register"
          className="block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </Link>

        <Link
          href="/protected"
          className="block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Locked Page 🔒
        </Link>

        <Link
          href="/login"
          className="block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Log In
        </Link>
      </nav>
    </div>
  );
}