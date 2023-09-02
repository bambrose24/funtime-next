import {Box, Button, ButtonProps, Flex, FlexProps} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ReactNode, useState} from 'react';
import {createContext} from 'react';
import {SequentialWizardProvider} from './SequentialWizardTypes';

export type WizardProps = {
  steps: Array<{
    component: JSX.Element;
  }>;
  startingIdx?: number;
  flexProps: Omit<FlexProps, 'direction'>;
};

export function SequentialWizard({steps, startingIdx, flexProps}: WizardProps) {
  const [currentIdx, setCurrentIdx] = useState(startingIdx ?? 0);
  const forward = () => setCurrentIdx(prev => prev + 1);
  const back = () => setCurrentIdx(prev => prev - 1);
  return (
    <SequentialWizardProvider value={{currentIdx, forward, back}}>
      <Flex direction="column" {...flexProps}>
        {steps.map((step, idx) => {
          const current = currentIdx === idx;
          const isLater = currentIdx > idx;
          return (
            <motion.div
              key={idx}
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
