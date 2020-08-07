import * as React from 'react';
import { Breakpoints } from '../types';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { breakpointsSizes } from './breakpoints-sizes';

interface ViewportProps {
  children: React.ReactNode;
  breakpoint?: Breakpoints;
  breakpoints?: string;
}

export const Viewport = ({ children, breakpoint, breakpoints }: ViewportProps) => {
  const { width } = useWindowDimensions();

  if ((breakpoint === Breakpoints.SMALL || breakpoints?.includes('s')) && width <= breakpointsSizes.s.max) {
    return <>{children}</>;
  }

  if (
    (breakpoint === Breakpoints.MEDIUM || breakpoints?.includes('m')) &&
    width >= breakpointsSizes.m.min &&
    width <= breakpointsSizes.m.max
  ) {
    return <>{children}</>;
  }

  if ((breakpoint === Breakpoints.LARGE || breakpoints?.includes('l')) && width >= breakpointsSizes.l.min) {
    return <>{children}</>;
  }

  return <></>;
};
