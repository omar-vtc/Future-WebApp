import ImageCarousel from "@components/organisms/ImageCarousel";
import React from "react";
import AboutSection from "@components/organisms/AboutSection";
import GoalsSection from "@components/organisms/GoalsSection";
import SpecialitiesSection from "@components/organisms/SpecialitiesSection";

function page() {
  return (
    <>
      <ImageCarousel />
      <GoalsSection />

      <AboutSection />

      <SpecialitiesSection />
    </>
  );
}

export default page;
