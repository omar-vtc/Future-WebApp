"use client";
import React from "react";
import SectionHeader from "../molecules/SectionHeader";
import Box from "@mui/material/Box";
import Typography from "node_modules/@mui/material/esm/Typography/Typography";
import ImageContainer from "@components/molecules/ImageContainer";
import ResponsiveGrid from "@components/molecules/ResponsiveGrid";
import { Container, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import colors from "@theme/colors";
import SimpleContainer from "@components/atoms/SimpleContainer";
import Title from "@components/atoms/Title";

function AboutSection() {
  return (
    <>
      <SectionHeader title="About Us" variant="h3" />
      <Box
        sx={{
          width: "100%",
          // border: "solid red",
          display: "flex",
          flexDirection: {
            xs: "column", // stack on small screens
            md: "row", // side-by-side on medium and up
          },
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          gap: {
            xs: 2,
            md: 3,
          },
          backgroundColor: colors.background.paper,
          mt: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            // border: "solid red",
            gap: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xs: "center",
              md: "flex-end",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              // border: "solid blue",

              width: {
                xs: "100%",
                sm: "90%",
                md: "70%",
              },
            }}
          >
            <SimpleContainer
              sx={{
                // border: "solid",
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                p: { xs: 1 },
              }}
            >
              <Title title="When did we start?" variant="h5" />
            </SimpleContainer>

            <Typography
              variant="body1"
              align="left"
              sx={{
                // border: "solid red",

                pt: 1,
                pl: { xs: 2, md: 3 },
              }}
            >
              {" "}
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              // border: "solid green",

              width: {
                xs: "100%",
                sm: "90%",
                md: "70%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            {" "}
            <SimpleContainer
              sx={{
                // border: "solid",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Title title="Why Future Academy?" variant="h5" />
            </SimpleContainer>
            <ResponsiveGrid>
              {Array.from(Array(8)).map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 2 }}>
                  <Container
                    sx={{
                      // border: "solid red",
                      width: "auto",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      // sx={{ border: "solid green" }}
                    >
                      Title
                      <CheckIcon
                        sx={{
                          color: colors.secondary,
                          marginLeft: "0.5rem",
                          // border: "solid red",
                          mb: 0.5,
                        }}
                      />
                    </Typography>
                  </Container>
                </Grid>
              ))}
            </ResponsiveGrid>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: {
              xs: "none", // hide on extra-small and small screens
              md: "flex", // show as flex on medium and up
            },
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <ImageContainer sx={{ width: "70%", height: "25rem" }} />
        </Box>
      </Box>
    </>
  );
}

export default AboutSection;
