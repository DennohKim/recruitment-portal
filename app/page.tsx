import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function Home() {
  return (
    <main className={`${outfit.variable} font-sans`}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
