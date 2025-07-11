// import { Button } from "@mui/material";
// import Title from "@components/atoms/Title";

import AboutSection from "@components/organisms/AboutSection";
import GoalsSection from "@components/organisms/GoalsSection";
import ImageCarousel from "@components/organisms/ImageCarousel";
import PortfolioSection from "@components/organisms/PortfolioSection";
import SpecialitiesSection from "@components/organisms/SpecialitiesSection";

export default function Home() {
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
