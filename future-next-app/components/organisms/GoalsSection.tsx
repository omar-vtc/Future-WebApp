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
          justifyContent: "center",
          p: 3,
          //   border: "solid red",
          gap: 8,
        }}
      >
        <BoxWithImage />
        <BoxWithImage />
        <BoxWithImage />
        <BoxWithImage />
      </Box>
    </>
  );
}

export default GoalsSection;
