import Image from "next/image";
import { Inter } from "next/font/google";
import BlogPosts from "./blogpost/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BlogPosts posts />
    </>
  );
}
