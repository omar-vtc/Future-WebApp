"use client";

import * as React from "react";
import { Box, Grid } from "@mui/material";

interface ResponsiveGridProps {
  children: React.ReactNode;
}

export default function ResponsiveGrid({ children }: ResponsiveGridProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        //  border: "solid red",
        p: 1,
      }}
    >
      <Grid container spacing={0.5} columns={{ xs: 4, sm: 8, md: 4 }}>
        {children}
      </Grid>
    </Box>
  );
}
