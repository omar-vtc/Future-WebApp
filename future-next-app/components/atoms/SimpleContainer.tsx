import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ border: "solid red" }}>
        {children}
      </Container>
    </React.Fragment>
  );
}
