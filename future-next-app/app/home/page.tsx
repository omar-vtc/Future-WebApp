import ImageCarousel from "@components/organisms/ImageCarousel";
import React from "react";
import AboutSection from "@components/organisms/AboutSection";
import GoalsSection from "@components/organisms/GoalsSection";
import SpecialitiesSection from "@components/organisms/SpecialitiesSection";
import PortfolioSection from "@components/organisms/PortfolioSection";

function page() {
  return (
    <>
      <ImageCarousel />
      <GoalsSection />

      <AboutSection />

      <SpecialitiesSection />
      <PortfolioSection />
    </>
  );
}

export default page;
