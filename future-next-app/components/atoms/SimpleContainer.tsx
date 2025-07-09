import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { SxProps, Theme } from "@mui/material/styles";

type SimpleContainerProps = {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function SimpleContainer({
  children,
  sx,
}: SimpleContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        // maxWidth="sm"
        sx={{
          ...sx,
        }}
      >
        {children}
      </Container>
    </React.Fragment>
  );
}
