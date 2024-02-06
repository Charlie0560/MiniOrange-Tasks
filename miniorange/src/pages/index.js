import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Production_Banner from "@/pages/production_banner/production_banner"
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Production_Banner/>
    </>
  );
}
