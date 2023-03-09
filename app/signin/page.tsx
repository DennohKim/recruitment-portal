
"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  return (
    
      <div className="flex  flex-col items-center justify-center space-y-4 min-h-[600px]">
        <div className="">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center gap-4 rounded-md border border-gray-300 px-4  py-2 text-lg font-medium hover:bg-gray-100 "
          >
            <Image
              src={"/assets/google.svg"}
              width="20"
              height={20}
              alt="google logo"
            />
            Sign in with Google{" "}
          </button>
        </div>
        <div className="">
          <button
            type="button"
            onClick={handleGithubSignin}
            className="flex items-center gap-4 rounded-md border border-gray-300 px-4 py-2 text-lg font-medium hover:bg-gray-100"
          >
            <Image
              src={"/assets/github.svg"}
              width={25}
              height={25}
              alt="Github Logo"
            />
            Sign in with Github{" "}
          </button>
        </div>
      </div>
    
  );
}
