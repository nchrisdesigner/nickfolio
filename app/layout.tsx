import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"
import { cn } from "@/lib/utils"

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
// const MangoFont = localFont({
//   src: "./../assets/fonts/MangoGrotesque-Regular.ttf",
//   variable: "--font-mango"
// })

export const metadata: Metadata = {
  title: "Nick Christoforidis | Web Designer & Developer",
  description: "Official We Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable)}>
        {children}
      </body>
    </html>
  );
}
