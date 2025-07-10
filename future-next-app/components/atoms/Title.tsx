import { Typography } from "@mui/material";

type TitleProps = {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Title({ title, variant }: TitleProps) {
  return (
    <Typography variant={variant} component="h1" sx={{ textAlign: "center" }}>
      {title}
    </Typography>
  );
}
