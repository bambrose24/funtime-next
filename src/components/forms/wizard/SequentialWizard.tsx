import {Box, Button, ButtonProps, Flex, FlexProps} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ReactNode, useState} from 'react';
import {createContext} from 'react';
import {SequentialWizardProvider} from './SequentialWizardTypes';

export type WizardProps = {
  steps: Array<{
    component: JSX.Element;
  }>;
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
  canSubmit: boolean;
  startingIdx?: number;
} & Omit<FlexProps, 'direction'>;

export function SequentialWizard({
  steps,
  onSubmit,
  isSubmitting,
  canSubmit,
  startingIdx,
  ...rest
}: WizardProps) {
  const [currentIdx, setCurrentIdx] = useState(startingIdx ?? 0);
  const forward = () => setCurrentIdx(prev => prev + 1);
  const back = () => setCurrentIdx(prev => prev - 1);
  return (
    <SequentialWizardProvider
      value={{currentIdx, forward, back, submit: {onSubmit, canSubmit, isSubmitting}}}
    >
      <Flex direction="column" {...rest}>
        {steps.map((step, idx) => {
          const current = currentIdx === idx;
          const isLater = currentIdx > idx;
          return (
            <motion.div
              style={{height: '100%'}}
              animate={{
                display: current ? 'inline' : 'none',
                opacity: current ? 1 : 0,
                x: current ? 0 : isLater ? -400 : 400,
              }}
              transition={{type: 'just'}}
            >
              <Flex h="100%" display={current ? 'flex' : 'none'}>
                {step.component}
              </Flex>
            </motion.div>
          );
        })}
      </Flex>
    </SequentialWizardProvider>
  );
}
