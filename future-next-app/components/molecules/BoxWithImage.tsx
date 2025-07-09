import React from "react";
import Box from "@mui/material/Box";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Title from "@components/atoms/Title";
import Typography from "node_modules/@mui/material/esm/Typography/Typography";
import colors from "@theme/colors";

function BoxWithImage() {
  return (
    <Box
      sx={{
        width: "20rem",
        height: "20rem",
        // border: "solid red",
        borderRadius: "1rem",
        boxShadow: "0px 0px 3px rgba(151, 145, 145, 0.23)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.background.paper,
      }}
    >
      <Box
        sx={{
          flex: 2,
          //   backgroundColor: "lightblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TrackChangesIcon
          sx={{
            fontSize: "9rem",
            color: colors.warning,
            // border: "solid black",
          }}
        />
        <Title title="Goal Title" variant="h5" />
      </Box>
      <Box
        sx={{
          flex: 1,
          //   backgroundColor: "lightcyan",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" align="center">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore .
        </Typography>
      </Box>
    </Box>
  );
}

export default BoxWithImage;
