import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1>Hello MiniOrange!</h1>
     <Link href="/hello">Page Views</Link> 

    </main>
  );
}
