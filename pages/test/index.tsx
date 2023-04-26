import {Box, Button, Fade, Flex, Slide, SlideFade, useDisclosure} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import FuntimePage from '@src/FuntimePage';
import {useState} from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default function TestPage() {
  const [idx, setIdx] = useState(0);

  const ENTRIES = 100;
  const range = [...Array(ENTRIES).keys()].map(x => x - ENTRIES / 2);
  console.log(range);

  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Flex direction="column" w="400px">
          {range.map(r => {
            const current = r === idx;
            const isLater = r > idx;
            return (
              <motion.div
                animate={{
                  display: current ? 'inline' : 'none',
                  opacity: current ? 1 : 0,
                  x: current ? 0 : isLater ? 400 : -400,
                }}
                transition={{type: 'tween'}}
              >
                <Box w="100%" h="200px" bg={colors[idx % colors.length]} />
              </motion.div>
            );
          })}

          <Flex w="100%" justify="space-between" mt="16px">
            <Button variant="outline" onClick={() => setIdx(prev => prev - 1)}>
              Back
            </Button>
            <Button variant="funtime-primary" onClick={() => setIdx(prev => prev + 1)}>
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
