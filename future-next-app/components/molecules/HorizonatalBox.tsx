import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type HorizonatalBoxProps = {
  icon: React.ReactNode;
  message: string;
  title: string;
};

function HorizonatalBox({ icon, message, title }: HorizonatalBoxProps) {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // full width on small screens
          sm: "30rem", // fixed width from small screens up
        },
        height: {
          xs: "auto", // auto height on mobile
          sm: "9rem", // fixed height on larger screens
        },
        // border: "1px solid #1976d2", // use a consistent border color
        display: "flex",
        flexDirection: {
          xs: "column", // stack icon and text on mobile
          sm: "row", // horizontal layout from small screens up
        },
        alignItems: "center",
        gap: 1,
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "flex-end",
          },
          alignItems: "center",
          flex: {
            xs: "none",
            sm: 0.5,
          },
          mb: {
            xs: 1,
            sm: 0,
          },
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography variant="body2" sx={{ px: 1 }}>
          {message}
        </Typography>
        <Typography variant="subtitle1" sx={{ pl: 1, mt: 0.5 }}>
          - {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default HorizonatalBox;
