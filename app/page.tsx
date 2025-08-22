import Hero from "../components/Hero";
import AboutInfo from "../components/AboutInfo";
import FeaturedProjects from "../components/FeaturedProjects";
import Faq from "../components/Faq";
import Promotes from "../components/Promotes";
import Statistics from "@/components/Statistics";
import FooterTop from "../components/FooterTop";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

export default function Home() {

  return (
    <SmoothScrollWrapper>
      <main className="min-w-dvh min-h-dvh overflow-hidden">
        <Hero />
        <AboutInfo />
        <FeaturedProjects title='Featured Projects'/>
        <Faq />
        <Promotes />
        <Statistics />
        <FooterTop />
      </main>
    </SmoothScrollWrapper>
  );
}
