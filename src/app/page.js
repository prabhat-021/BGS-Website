import { CenterHeading } from "@/components/addonFunctions/Start-heading";
import Expanding from "@/components/homePage/expanding";
import Features from "@/components/homePage/homeMidSection2/Features";
import JoinUsCard from "@/components/homePage/homeMidSection2/Features/joinus";
import Overview from "@/components/homePage/homeMidSection2/Overview";
import Services from "@/components/homePage/homeMidSection2/services";
import Hero from "@/components/hero-section/hero";
import Footer from "@/components/footer-section/footer";
export default function Home() {
  return (
    <div>
      {/* Section 1 Home Page */}
          <Hero />
      <div id="section1" className=" min-h-screen bg-gray-200 ">
        <div className="md:flex justify-center mb-2 ">
          <Features />
          <JoinUsCard />
        </div>
        <Services />
        <Expanding />
      </div>
      {/* Section-2 About Page */}
      <div id="section2" className="bg-gray-200 min-h-screen md:px-10 px-2">
        <CenterHeading heading="About Us" />
        <Overview />
      </div>
      <Footer/>
    </div>
  );
}
