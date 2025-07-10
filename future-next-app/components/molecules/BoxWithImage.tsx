import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Title from "@components/atoms/Title";
import { SxProps, Theme } from "@mui/material/styles";

type BoxWithImageProps = {
  icon: React.ReactNode;
  description: string;
  title: string;
  sx?: SxProps<Theme>;
};

function BoxWithImage({ icon, description, title, sx }: BoxWithImageProps) {
  return (
    <Box
      sx={{
        // width: "20rem",
        // height: "20rem",
        // borderRadius: "1rem",
        // boxShadow: "0px 0px 3px rgba(151, 145, 145, 0.23)",
        // display: "flex",
        // flexDirection: "column",
        // backgroundColor: colors.background.paper,
        // // border: `1px solid ${colors.primary}`,
        ...sx,
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {icon}
        <Title title={title} variant="h5" />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" align="center">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default BoxWithImage;
