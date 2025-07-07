import SectionUnderline from "@components/atoms/SectionUnderline";
import SimpleContainer from "@components/atoms/SimpleContainer";
import Title from "@components/atoms/Title";
import colors from "@theme/colors";

import React from "react";

type SectionHeaderProps = {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

function SectionHeader({ title, variant }: SectionHeaderProps) {
  return (
    <SimpleContainer
      sx={{
        // border: "solid red",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Title title={title} variant={variant} />
      <SectionUnderline
        color={colors.secondary}
        width={"6rem"}
        height={"3px"}
      />{" "}
      {/* You can customize color/width */}
    </SimpleContainer>
  );
}

export default SectionHeader;
