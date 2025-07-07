import FadeInWhenVisible from "@components/animations/FadeInWhenVisible";
import BoxWithImage from "@components/molecules/BoxWithImage";
import SectionHeader from "@components/molecules/SectionHeader";
import Box from "@mui/material/Box";

import React from "react";

function GoalsSection() {
  return (
    <>
      <SectionHeader title="Our Goals" variant="h3" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center", // center on mobile
            sm: "space-around",
            md: "center",
          },
          flexDirection: {
            xs: "column", // vertical stack on small screens
            sm: "row", // horizontal row from small screens up
          },
          alignItems: "center",
          gap: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: 8,
          },
          px: { xs: 2, sm: 3.5 },
          py: 4,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <FadeInWhenVisible key={i}>
            <BoxWithImage />
          </FadeInWhenVisible>
        ))}
      </Box>
    </>
  );
}

export default GoalsSection;
