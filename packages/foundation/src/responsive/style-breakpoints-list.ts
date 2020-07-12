import { mediaQueries } from '.';

export const styledMediaQueriesForBreakpointList = (breakpoints: string, style: string): string => {
  const breakpointList = breakpoints.split('|');
  let mediaQueriesStyles = '';

  breakpointList.map((breakpoint) => {
    mediaQueriesStyles += mediaQueries[breakpoint](style);
  });

  return mediaQueriesStyles;
};
