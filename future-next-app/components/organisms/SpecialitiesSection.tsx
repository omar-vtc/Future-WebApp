import SectionHeader from "@components/molecules/SectionHeader";
import Box from "@mui/material/Box";
import colors from "@theme/colors";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import BoxWithImage from "@components/molecules/BoxWithImage";
import FadeInWhenVisible from "@components/animations/FadeInWhenVisible";

const specialitiesData = [
  {
    icon: <BuildIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Engineering",
    description:
      "Hands-on learning in mechanical, electrical, and civil disciplines to build the future.",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Psychology",
    description:
      "Explore human behavior and mental processes through engaging, practical education.",
  },
  {
    icon: <LanguageIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Linguistics",
    description:
      "Develop deep understanding of languages and communication across cultures.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Software Development",
    description:
      "Master web, mobile, and backend technologies with industry-standard tools.",
  },
  // {
  //   icon: <ScienceIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
  //   title: "Scientific Research",
  //   description:
  //     "Foster critical thinking and discovery in physics, chemistry, and biology.",
  // },
];

function SpecialitiesSection() {
  return (
    <>
      <SectionHeader title="Future Academy Specialities" variant="h3" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // backgroundColor: colors.background.paper,
          // border: `1px solid ${colors.primary}`,
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
        {specialitiesData.map((goal, index) => (
          <FadeInWhenVisible key={index}>
            <BoxWithImage
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
              sx={{
                width: "20rem",
                height: "20rem",
                borderRadius: "1rem",
                boxShadow: "0px 0px 3px rgba(151, 145, 145, 0.23)",
                display: "flex",
                flexDirection: "column",
                backgroundColor: colors.background.paper,
                // border: `1px solid ${colors.primary}`,
              }}
            />
          </FadeInWhenVisible>
        ))}
      </Box>
    </>
  );
}

export default SpecialitiesSection;
