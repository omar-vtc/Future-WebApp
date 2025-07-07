import ImageCarousel from "@components/organisms/ImageCarousel";
import React from "react";
import AboutSection from "@components/organisms/AboutSection";
import GoalsSection from "@components/organisms/GoalsSection";

function page() {
  return (
    <>
      <ImageCarousel />
      <GoalsSection />
      <AboutSection />
    </>
  );
}

export default page;
