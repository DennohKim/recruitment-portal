"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
// import PostJobModal from "../components/PostJobModal";

type User = {
  name: string;
  image: string;
}

export default function SignOut({name, image}: User){
    return (
      <>
        <Link href="/profile" className="flex items-center space-x-4">
          <div className="mb-4 mt-4 flex cursor-pointer items-center space-x-3">
            <img className="h-10 w-10 rounded-full" src={image} />
          </div>
          <div className="space-y-1 font-medium">
            <p>{name}</p>
          </div>
        </Link>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          

          <button
            onClick={() => signOut()}
            className="inline-block rounded-md border border-gray-200 bg-white px-3 py-3 text-center text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-100"
          >
            <i className="fa fa-user w-5 text-gray-400"></i>
            <span className=" inline font-normal uppercase">Sign out</span>
          </button>
        </div>
      </>
    );
}