import Logo from "../../public/assets/moringa-logo.png";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SignOut from "./SignOut";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between align-center items-center">
          <div className="">
            <Link href="/">
              <Image src={Logo} height="40" width="120" alt="Logo" />
            </Link>
          </div>
          <div>
            <nav className="space-x-10">
              <Link href="/">Home</Link>
              <Link href="/jobs">Jobs</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            
            {!session?.user && <Login />}
           {session?.user && <SignOut name={session.user?.name || ""} image={session.user?.image || ""} />}
          </div>
        </div>
      </div>
    </header>
  );
}
