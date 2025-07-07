import React from "react";
import SectionHeader from "../molecules/SectionHeader";
import Box from "@mui/material/Box";
import Container from "node_modules/@mui/material/esm/Container/Container";
import Image from "next/image";
function AboutSection() {
  return (
    <>
      <SectionHeader title="About Us" variant="h3" />
      <Box
        sx={{
          border: "solid red",
          width: "100%",
          height: "40rem",
          display: "flex",
        }}
      >
        <Box sx={{ border: "solid blue", flex: 1 }}></Box>
        <Box sx={{ border: "solid green", flex: 1 }}>
          <Container
            sx={{
              width: "70%",
              height: "70%",
              border: "solid",
              position: "relative",
            }}
          >
            <Image
              src="/images/logo.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default AboutSection;
