import React from "react";
import Container from "node_modules/@mui/material/esm/Container/Container";
import Image from "next/image";
import { SxProps, Theme } from "@mui/material/styles";

type ImageContainerProps = {
  sx?: SxProps<Theme>;
};
function ImageContainer({ sx }: ImageContainerProps) {
  return (
    <Container
      sx={{
        // border: "solid",
        position: "relative",
        ...sx,
      }}
    >
      <Image
        src="/images/logo.png"
        alt=""
        fill
        style={{ objectFit: "contain" }}
      />
    </Container>
  );
}

export default ImageContainer;
