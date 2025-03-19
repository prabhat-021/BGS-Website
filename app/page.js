import ServicesSection from "@/components/card";
import StarPerformerSlider from "@/components/Carosel";
import SpinningText from "@/components/circulartext";
import CircularText from "@/components/circulartext";
import ScrollText from "@/components/expanding";
import Expanding from "@/components/expanding";
import ScrollRevealText from "@/components/expandingmenu";
import ExpandingMenu from "@/components/expandingmenu";
import HistoryTimeline from "@/components/History";
import FeaturesSection from "@/components/History";
import Navbar from "@/components/Navbar";
import Ourdata from "@/components/Overview";
import ScrollEffect from "@/components/ScrollEffect";
import StatsSection from "@/components/statsmodel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <CircularText/>
      <StatsSection/>
      
      <Expanding/>
      <ScrollEffect/>
      <ServicesSection/>
      <HistoryTimeline/>
      <Ourdata/>
      <StarPerformerSlider/>
      
      
      
    </div>
  );
}
