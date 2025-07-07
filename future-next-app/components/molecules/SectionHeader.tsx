import SimpleContainer from "@components/atoms/SimpleContainer";
import Title from "@components/atoms/Title";
import React from "react";

type SectionHeaderProps = {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

function SectionHeader({ title, variant }: SectionHeaderProps) {
  return (
    <SimpleContainer>
      <Title title={title} variant={variant} />
    </SimpleContainer>
  );
}

export default SectionHeader;
