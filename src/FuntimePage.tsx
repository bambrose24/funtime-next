import { ReactNode } from "react";
import { Nav } from "./components/Nav";

const FuntimePage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default FuntimePage;
