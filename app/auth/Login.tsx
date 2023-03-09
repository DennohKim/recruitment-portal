"use client";

import Link from "next/link";

export default function Login() {
  return (
    <Link href='/signin'>
      <button className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
        <i className="text-gray-400 w-5 fa fa-user"></i>
        <span className="inline ml-1">Sign in</span>
      </button>
    </Link>
  );
}
