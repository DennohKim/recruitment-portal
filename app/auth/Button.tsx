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
    <div className="flex z-100">
      <div
        className="relative  flex w-full min-w-[300px] justify-center"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <div className="absolute z-10 mt-14 w-full flex-col space-y-4 rounded-md bg-white border shadow-sm px-10 py-10">
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
      <div className="">
        <label className="swap-rotate swap border-2 border-gray-800 px-2 py-1 rounded-md">
          <input type="checkbox" onClick={toggleMenu} />
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}
