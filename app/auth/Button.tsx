"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import Login from './Login';
import SignOut from './SignOut';

export default function Button({session}: any) {

   const [showMenu, setShowMenu] = useState(false);

     const toggleMenu = () => {
       setShowMenu(!showMenu);
      
     };
  return (
    <div className="flex">
      <div
        className="relative  flex w-full min-w-[300px] justify-center"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <div className="absolute mt-10 flex-col rounded-md bg-gray-200/95 z-50 px-10 space-y-4 py-10 w-full">
          <nav className="flex flex-col space-y-4">
            <Link href="/">Home</Link>
            <Link href="/jobs">Jobs</Link>
          </nav>

          <div className="items-center space-x-4 md:flex">
            {!session?.user && <Login />}
            {session?.user && (
              <SignOut
                name={session.user?.name || ""}
                image={session.user?.image || ""}
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="flex items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-black hover:text-black"
      >
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
        </svg>
      </button>
    </div>
  );
}
