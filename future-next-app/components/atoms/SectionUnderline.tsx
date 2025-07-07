import React from "react";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

type SectionUnderlineProps = {
  color?: string;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
};

export default function SectionUnderline({
  color = "#1976d2",
  width = "60px",
  height = "4px",
  sx,
}: SectionUnderlineProps) {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width,
        height,
        borderRadius: 2,
        marginTop: 1,
        ...sx,
      }}
    />
  );
}
