import { breakpoints } from '.';

export const mediaQueries = {
  s: (styles: string) => `
    @media (max-width: ${breakpoints.s.max}px) {
      ${styles}
    }
  `,
  m: (styles: string) => `
    @media (min-width: ${breakpoints.m.min}px) and (max-width: ${breakpoints.m.max}px) {
      ${styles}
    }
  `,
  l: (styles: string) => `
  @media (min-width: ${breakpoints.l.min}px) and (max-width: ${breakpoints.l.max}px) {
    ${styles}
  }
`,
  xl: (styles: string) => `
  @media (min-width: ${breakpoints.xl.min}px) {
    ${styles}
  }
`,
};
