import { CenterHeading } from "@/components/addonFunctions/Start-heading";
import Expanding from "@/components/homePage/expanding";
import Features from "@/components/homePage/homeMidSection2/Features";
import JoinUsCard from "@/components/homePage/homeMidSection2/Features/joinus";
import Overview from "@/components/homePage/homeMidSection2/Overview";
import Services from "@/components/homePage/homeMidSection2/services";
import Hero from "@/components/hero-section/hero";
<<<<<<< HEAD
import Footer from "@/components/footer-section/footer";
// import Navbar from "@/components/header/navbar";
=======
>>>>>>> ca365f3b54417b57fd59c98f133a2f5db0f75514
export default function Home() {
  return (
    <div>
      {/* Section 1 Home Page */}
      {/* <Navbar/> */}
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
    
    </div>
  );
}
