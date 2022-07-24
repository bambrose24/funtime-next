import { useBreakpointValue } from "@chakra-ui/react";
import { ScreenSize } from "./types";

export function useScreenSize(): ScreenSize {
  return (
    useBreakpointValue<ScreenSize>(
      { base: "mobile", lg: "desktop" },
      "mobile"
    ) ?? "mobile"
  );
}
