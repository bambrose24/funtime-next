import {Box, Button, Flex, FlexProps} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ReactNode, useState} from 'react';

export type WizardProps = {
  steps: Array<{
    component: ReactNode;
  }>;
  onSubmit: () => void;
  isSubmitting: boolean;
  canSubmit: boolean;
  startingIdx?: number;
} & Pick<FlexProps, 'width' | 'height'>;

export function Wizard({
  steps,
  onSubmit,
  isSubmitting,
  canSubmit,
  width,
  startingIdx = 0,
}: WizardProps) {
  const [currentIdx, setCurrentIdx] = useState(startingIdx);
  const isFinal = currentIdx === steps.length - 1;
  const isStart = currentIdx === 0;
  return (
    <Flex direction="column" width={width}>
      {steps.map((step, idx) => {
        const current = currentIdx === idx;
        const isLater = currentIdx > idx;
        return (
          <motion.div
            animate={{
              display: current ? 'inline' : 'none',
              opacity: current ? 1 : 0,
              x: current ? 0 : isLater ? -400 : 400,
            }}
            transition={{type: 'tween'}}
          >
            {step.component}
          </motion.div>
        );
      })}
      <Flex w="100%" justify="space-between" mt="16px">
        {isStart ? (
          <Box />
        ) : (
          <Button variant="outline" onClick={() => setCurrentIdx(prev => prev - 1)}>
            Back
          </Button>
        )}
        {isFinal ? (
          <Button
            variant="funtime-primary"
            isLoading={isSubmitting}
            onClick={onSubmit}
            disabled={!canSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button variant="funtime-primary" onClick={() => setCurrentIdx(prev => prev + 1)}>
            Next
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
