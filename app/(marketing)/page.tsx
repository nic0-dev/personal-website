import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";
// import PricingSection from "@/components/landing/pricing-section";
import ExperienceSection from "@/components/landing/experience-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import ProjectSection from "@/components/landing/project-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      {/* <ClientSection /> */}
      <SphereMask />
      <AboutSection />
      {/* <PricingSection /> */}
      <ExperienceSection />
      {/* <ProjectSection /> */}
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
