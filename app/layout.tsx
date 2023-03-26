import Navbar from './auth/Navbar'
import './globals.css'

import { Outfit } from "@next/font/google";
import QueryWrapper from './auth/QueryWrapper';

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${outfit.variable} font-sans`}>
        <QueryWrapper>
          <Navbar />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
