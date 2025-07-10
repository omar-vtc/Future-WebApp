import FadeInWhenVisible from "@components/animations/FadeInWhenVisible";
import BoxWithImage from "@components/molecules/BoxWithImage";
import SectionHeader from "@components/molecules/SectionHeader";
import Box from "@mui/material/Box";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import React from "react";
import colors from "@theme/colors";

const goalsData = [
  {
    icon: <TrackChangesIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Goal Alignment",
    description:
      "Ensure everyone's efforts are aligned with strategic business objectives.",
  },
  {
    icon: <GroupWorkIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Team Collaboration",
    description:
      "Promote collaboration and effective communication across departments.",
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Innovation",
    description: "Foster a culture of continuous improvement and creativity.",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: "8rem", color: colors.warning }} />,
    title: "Growth Focus",
    description: "Support scalable and sustainable growth across all areas.",
  },
];
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
        {goalsData.map((goal, index) => (
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

export default GoalsSection;
