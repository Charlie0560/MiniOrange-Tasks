import { Inter } from "next/font/google";
import Production_Banner from "@/pages/production_banner/production_banner";
import Customer from "@/pages/customer/customer";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Production_Banner />
      {/* <Customer/> */}
    </>
  );
}
