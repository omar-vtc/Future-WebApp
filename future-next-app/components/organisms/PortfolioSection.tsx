import SectionHeader from "@components/molecules/SectionHeader";
import Box from "@mui/material/Box";
import colors from "@theme/colors";
import React from "react";
import HorizonatalBox from "@components/molecules/HorizonatalBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarRateIcon from "@mui/icons-material/StarRate";

const horizontalBoxData = [
  {
    icon: (
      <EmojiEmotionsIcon sx={{ fontSize: "4.5rem", color: colors.primary }} />
    ),

    message:
      "Future Academy helped me unlock my potential with practical, real-world skills that boosted my confidence.",
    title: "Ali Youssef, Student",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: "4.5rem", color: colors.primary }} />,
    message:
      "The instructors are top-notch, and the hands-on projects made all the difference in mastering the concepts.",
    title: "Dr. Salma Radwan, Instructor",
  },
  {
    icon: (
      <WorkspacePremiumIcon
        sx={{ fontSize: "4.5rem", color: colors.primary }}
      />
    ),
    message:
      "Certifications from Future Academy opened doors to new career opportunities I never imagined.",
    title: "Mahmoud Farouk, Graduate",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: "4.5rem", color: colors.primary }} />,
    message:
      "What I loved most was the community — collaborative, supportive, and full of energy!",
    title: "Nour El-Din, Community Member",
  },
  {
    icon: <StarRateIcon sx={{ fontSize: "4.5rem", color: colors.primary }} />,
    message:
      "Truly a five-star experience! I'd recommend Future Academy to anyone serious about learning.",
    title: "Hala Zaki, Alumni",
  },
];
function PortfolioSection() {
  return (
    <>
      <SectionHeader title="Our Portfolio" variant="h3" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: colors.background.paper,
          //   border: `1px solid ${colors.primary}`,
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
          mt: 2,
        }}
      >
        {horizontalBoxData.map((item, index) => (
          <HorizonatalBox
            key={index}
            icon={item.icon}
            message={item.message}
            title={item.title}
          />
        ))}
      </Box>
    </>
  );
}

export default PortfolioSection;
