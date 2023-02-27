import {
  Box,
  Button,
  Fade,
  Flex,
  Slide,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import FuntimePage from "@src/FuntimePage";
import { useState } from "react";

export default function TestPage() {
  const [idx, setIdx] = useState(0);

  const ENTRIES = 100;
  const range = [...Array(ENTRIES).keys()].map((x) => x - ENTRIES / 2);
  console.log(range);

  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Flex direction="column" w="400px">
          {range.map((r) => {
            const current = r === idx;
            return (
              <SlideFade unmountOnExit={true} in={current}>
                <Box w="100%" bg="blue" h="200px" />
              </SlideFade>
            );
          })}

          <Flex w="100%" justify="space-between" mt="16px">
            <Button
              variant="outline"
              onClick={() => setIdx((prev) => prev - 1)}
            >
              Back
            </Button>
            <Button
              variant="funtime-primary"
              onClick={() => setIdx((prev) => prev + 1)}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
