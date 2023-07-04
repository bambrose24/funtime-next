import {FC, PropsWithChildren} from 'react';

// Custom Type for a React functional component with props AND CHILDREN
declare global {
  type ReactFCC<P extends object> = FC<PropsWithChildren<P>>;
}

export {};
