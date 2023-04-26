import {FC, PropsWithChildren} from 'react';

// Custom Type for a React functional component with props AND CHILDREN
declare global {
  type ReactFCC<P = {}> = FC<PropsWithChildren<P>>;
}

export {};
