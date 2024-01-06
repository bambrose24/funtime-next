import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Typography } from "../Typography";

export const FuntimeSeasonOver = ({ leagueId }: { leagueId: number }) => {
  return (
    <Flex direction="column" mx="24px" justify="center" textAlign="center">
      <Typography.H3>The season is over! Thanks for playing.</Typography.H3>
      <Typography.H5>
        Stay tuned for next year! You can still check out the{" "}
        <Link href={`league/${leagueId}/season`}>
          <u>standings</u>
        </Link>{" "}
        and see Super Bowl picks there.
      </Typography.H5>
    </Flex>
  );
};
