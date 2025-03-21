const Hero = require("@/components/landing-page/hero").default;
const ScrollMarquee = require("@/components/landing-page/scroll-marquee-v2").default;
const AboutSection = require("@/components/landing-page/about-section").default;
const Features = require("@/components/landing-page/features").default;
const ServicesSection = require("@/components/landing-page/services-section").default;
const StatsSection = require("@/components/landing-page/stats-section").default;
const React = require("react");

function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8f8f8]">
      <Hero />
      {/* <ScrollMarquee /> */}
      <AboutSection />
      <Features />
      <ServicesSection />
      <StatsSection />
    </main>
  );
}

module.exports = Home;
