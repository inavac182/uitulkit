import { BreakpointsObject, mediaQueries } from '.';

export const styleBreakpointsObject = (
  sizesObj: BreakpointsObject,
  styleKey: string,
  defaultStyle = '',
  extraStaticStyle = '',
  staticStylePreValue = '',
  staticStylePostValue = ''
) => {
  let style = `${defaultStyle}`;

  Object.keys(sizesObj).map((key) => {
    if (mediaQueries[key]) {
      style += mediaQueries[key](`
        ${extraStaticStyle ? extraStaticStyle : ''}; 
        ${styleKey}: ${staticStylePreValue} ${sizesObj[key]} ${staticStylePostValue};
      `);
    }
  });

  return style;
};
