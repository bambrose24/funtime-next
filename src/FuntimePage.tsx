import { Container } from "@mui/material";
import { ReactNode } from "react";

const FuntimePage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FuntimePage;
