"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
     onClick={() => signIn("google")}
      className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
    >
      <i className="text-gray-400 w-5 fa fa-user"></i>
      <span className="hidden lg:inline ml-1">Sign in</span>
    </button>
  );
}
