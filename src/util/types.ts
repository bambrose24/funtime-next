export type ScreenSize = 'mobile' | 'desktop';

export function Defined<T>(thing: T | null | undefined): thing is T {
  return thing !== null && thing !== undefined;
}
