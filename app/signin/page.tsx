
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
    <>
      <div className="">
        <button type="button" onClick={handleGoogleSignin} className="">
          Sign In with Google{" "}
          <Image
            src={"/assets/google.svg"}
            width="20"
            height={20}
            alt="google logo"
          />
        </button>
      </div>
      <div className="">
        <button type="button" onClick={handleGithubSignin} className="">
          Sign In with Github{" "}
          <Image
            src={"/assets/github.svg"}
            width={25}
            height={25}
            alt="Github Logo"
          />
        </button>
      </div>
    </>
  );
}
