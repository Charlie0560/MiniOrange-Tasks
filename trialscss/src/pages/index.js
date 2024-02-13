import { Inter } from "next/font/google";
import Production_Banner from "@/pages/production_banner/production_banner";
import Customer from "@/pages/customer/customer";
import Rate_Card from "@/pages/rate_card/rate_card";
import Pricing from "@/pages/pricing/pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "@/pages/timeline/timeline";
import LandingTeams from "@/pages/landingTeams/landingTeams";
import Timeline2 from "@/pages/timeline/timeline2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Production_Banner /> */}
      {/* <Customer /> */}
      {/* <Rate_Card /> */}
      {/* <Pricing /> */}
      {/* <Timeline /> */}
      <Timeline2 />
      {/* <LandingTeams /> */}
    </>
  );
}
