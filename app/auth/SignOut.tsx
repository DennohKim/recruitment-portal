"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  name: string;
  email: string;
  image: string;
}

export default function SignOut({name, email, image}: User){
    return (
      <>
        <Link href="/profile" className="flex items-center space-x-4">
          <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
            <img className="w-10 h-10 rounded-full" src={image} />
          </div>
          <div className="space-y-1 font-medium">
            <p>
              {name}
              <time className="block text-sm text-gray-500 dark:text-gray-400">
                {email}
              </time>
            </p>
          </div>
        </Link>

        <button
          onClick={() => signOut()}
          className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
        >
          <i className="text-gray-400 w-5 fa fa-user"></i>
          <span className="hidden lg:inline ml-1">Sign out</span>
        </button>
      </>
    );
}