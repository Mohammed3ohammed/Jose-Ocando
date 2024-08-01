import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Intellicheck from "@/Components/Intellicheck";
import Story from "@/Components/Story";
import Aggregate from "@/Components/Aggregate";
import Work from "@/Components/Work";
import Blog from "@/Components/Blog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jo",
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
        <Hero />
        <Intellicheck />
        <Story />
        <Aggregate />
        <Work />
        <Blog />  
        </body>
    </html>
  );
}
