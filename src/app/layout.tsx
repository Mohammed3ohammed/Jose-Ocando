import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Intellicheck from "@/Components/Intellicheck";
import Story from "@/Components/Story";
import Aggregate from "@/Components/Aggregate";
import Work from "@/Components/Work";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import "../style/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose-Ocando",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/> 
        {children}
        <Intellicheck />
        <Story />
        <Aggregate />
        <Work />
        <Blog />  
        <Footer />
        </body>
    </html>
  );
}
