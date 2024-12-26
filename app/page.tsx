import BackToTop from "@/components/elements/BackToTop";
import Cta2 from "@/components/sections/Cta2";
import Cta3 from "@/components/sections/Cta3";
import Faqs2 from "@/components/sections/Faqs2";
import Features6 from "@/components/sections/Features6";
import Features7 from "@/components/sections/Features7";
import Hero3 from "@/components/sections/Hero3";
import LogoCloud3 from "@/components/sections/LogoCloud3";
import Services2 from "@/components/sections/Services2";
import Static2 from "@/components/sections/Static2";

export default function Home() {
  return (
    <>
      <Hero3 />
      <LogoCloud3 />
      <Services2 />
      <Cta2 />
      <Static2 />
      <Cta3 />
      <Features6 />
      <Features7 />
      <Faqs2 />
      {/* <Testimonial3 /> */}
      <BackToTop target='.section-hero-3' />
    </>
  );
}
