import { Inter } from "next/font/google";
import Production_Banner from "@/pages/production_banner/production_banner";
import Customer from "@/pages/customer/customer";
import Rate_Card from "@/pages/rate_card/rate_card";
import Pricing from "@/pages/pricing/pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "@/pages/timeline/timeline";
import LandingTeams from "@/pages/landingTeams/landingTeams";
import Timeline2 from "@/pages/timeline/timeline2";
import Timeline3 from "./timeline/timeline3";
import Timeline4 from "./timeline/timeline4";
import Header from "./header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Header />
      <Customer />
    */}
      <Rate_Card />
      <Production_Banner />
      {/* <Pricing /> */}
      {/* <Timeline />
      <Timeline2 /> */}
      {/* <Timeline3 /> */}
      {/* <Timeline4 /> */}
      {/* <LandingTeams /> */}
    </>
  );
}
