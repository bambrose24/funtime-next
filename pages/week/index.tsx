import FuntimePage from "@src/FuntimePage";
import { Typography } from "@src/components/Typography";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { usePicksByWeekQuery } from "@src/generated/graphql";
import { useState } from "react";
import WeekContent from "@src/components/week/WeekContent";

export default function Profile() {
  return (
    <FuntimePage>
      <WeekContent />
    </FuntimePage>
  );
}
