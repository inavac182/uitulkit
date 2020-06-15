import { breakpoints } from '.';

export const mediaQueries = {
  s: (styles: string) => `
    @media only screen and (max-width: ${breakpoints.s.max}) {
      ${styles}
    }
  `,
  m: (styles: string) => `
    @media only screen and (min-width: ${breakpoints.m.min}) and (max-width: ${breakpoints.m.max}) {
      ${styles}
    }
  `,
  l: (styles: string) => `
  @media only screen and (min-width: ${breakpoints.l.min}) and (max-width: ${breakpoints.l.max}) {
    ${styles}
  }
`,
  xl: (styles: string) => `
  @media only screen and (min-width: ${breakpoints.xl.min}) {
    ${styles}
  }
`,
};
