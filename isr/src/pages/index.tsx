import Image from "next/image";
import { Inter } from "next/font/google";
import BlogPosts from "./blogpost/page";
import ISR from "@/pages/isr/page"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <BlogPosts posts /> */}
      <ISR />
    </>
  );
}
