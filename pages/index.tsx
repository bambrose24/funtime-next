import { Flex, Box, VStack, Image, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Section from "@src/components/Section";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";

const Home: NextPage = () => {
  return (
    <FuntimePage>
      <Section>
        <Flex justify="center">
          <Box
            px={8}
            py={6}
            bgColor="white"
            rounded="lg"
            border="solid 2px"
            borderColor="primary"
            boxShadow="1px 0px 20px lightgray"
            maxWidth="1000px"
          >
            <VStack>
              <Image src="/favicon.ico" width={50} />
              <Typography.H3 textAlign="center">
                Welcome to{" "}
                <Image
                  pb={2}
                  src="/logo/funtime_full_logo_blue.png"
                  width={100}
                  verticalAlign="middle"
                  display="inline-block"
                />{" "}
                2022!
              </Typography.H3>
              <Box px={10}>
                At its core, Funtime consists of 3 main competitions:
                <Box ml={"32px"}>
                  <ul>
                    <li>Weekly Picks</li>
                    <li>Seasonal Picks</li>
                    <li>Super Bowl Pick</li>
                  </ul>
                </Box>
                Each of these share the same principles of having the best
                pick(s) for the category. Registraion for a season opts you into
                each of these games for the duration of an NFL season.
                <Divider my={4} />
                <Typography.H4 align="center" variant="h6">
                  <b>Weekly Picks</b>
                </Typography.H4>
                Each week you make picks for the upcoming week's NFL games. You
                predict who will win each one, and pick a total score for the
                last chronological game of the week.
                <Box mt="16px" />
                The winner is determined by:
                <Box ml="32px" mt="4px">
                  <ul>
                    <li>
                      The person who picked the most correctly will win the
                      week.
                    </li>
                    <li>
                      If there is a tie, the person with the closest total score
                      for the last chronological game will win.
                    </li>
                    <li>
                      If there is stil a tie, there are co-winners for that
                      week.
                    </li>
                  </ul>
                </Box>
                <Divider my={4} />
                <Typography.H4 align="center" variant="h6">
                  <b>Seasonal Picks</b>
                </Typography.H4>
                This competition runs the duration of the season. It is similar
                to Weekly Picks in that you aim to have the highest total
                correct picks. The top 5 players will be winners. There is no
                tiebreaker for point differences over the course of the season.
                <Divider my={4} />
                <Typography.H4 align="center" variant="h6">
                  <b>Super Bowl Pick</b>
                </Typography.H4>
                At the beginning of the season, users register and pick their
                Super Bowl pick. You pick:
                <Box ml="32px" my="4px">
                  <ul>
                    <li>A winning team.</li>
                    <li>A losing team.</li>
                    <li>A total score of the game.</li>
                  </ul>
                </Box>
                The winner of the Super Bowl competition is determined by the
                following:
                <Box ml="32px" mt="4px">
                  <ul>
                    <li>The person who picked the winner correctly wins.</li>
                    <li>
                      If there is a tie or no one picked the winner correctly,
                      the person who picked the loser correctly will win.
                    </li>
                    <li>
                      If there is a tie or no one picked the loser correctly,
                      the person closest to the total score will win.
                    </li>
                  </ul>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Section>
    </FuntimePage>
  );
};

export default Home;
