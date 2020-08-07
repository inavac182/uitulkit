import { breakpointsSizes } from '.';

export const mediaQueries = {
  s: (styles: string): string => `
    @media (max-width: ${breakpointsSizes.s.max}px) {
      ${styles}
    }
  `,
  m: (styles: string): string => `
    @media (min-width: ${breakpointsSizes.m.min}px) and (max-width: ${breakpointsSizes.m.max}px) {
      ${styles}
    }
  `,
  l: (styles: string): string => `
  @media (min-width: ${breakpointsSizes.l.min}px) {
    ${styles}
  }
`,
};
