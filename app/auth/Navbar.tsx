
import Logo from "../../public/assets/moringa-logo.png";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SignOut from "./SignOut";
import Button from "./Button";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="border-b bg-white py-2">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="align-center flex items-center justify-between">
          <div className="">
            <Link href="/">
              <Image src={Logo} height="40" width="120" alt="Logo" />
            </Link>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link href="/">Home</Link>
            <Link href="/jobs">Jobs</Link>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            {!session?.user && <Login />}
            {session?.user && (
              <SignOut
                name={session.user?.name || ""}
                image={session.user?.image || ""}
              />
            )}
          </div>
          <div className="flex items-center md:hidden">
         
            <Button session={session} />
          </div>
        </div>
      </div>
    </header>
  );
}
