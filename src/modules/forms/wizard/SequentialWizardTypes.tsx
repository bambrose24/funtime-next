import {createContext, ReactNode, useContext, useState} from 'react';

export type SequentialWizardContextType = {
  currentIdx: number;
  forward: () => void;
  back: () => void;
};

const SequentialWizardContext = createContext<SequentialWizardContextType>({
  currentIdx: 0,
  forward: () => {},
  back: () => {},
});

export function SequentialWizardProvider({
  value,
  children,
}: {
  value: SequentialWizardContextType;
  children: ReactNode;
}) {
  return (
    <SequentialWizardContext.Provider value={value}>{children}</SequentialWizardContext.Provider>
  );
}

export function useWizard() {
  return useContext(SequentialWizardContext);
}
