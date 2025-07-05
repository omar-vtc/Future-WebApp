import { Button } from "@mui/material";
import Title from "@components/atoms/Title";

export default function Home() {
  return (
    <div>
      <Title title="Welcome to Future WebApp from Component" variant="h4" />
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
}
