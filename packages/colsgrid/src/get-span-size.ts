import { isNumber } from 'util';
import { styleBreakpointsObject, BreakpointsObject } from '@uitulkit/foundation';

export const getSpanSize = (sizeValue: number | BreakpointsObject, styleKey: string) => {
  if (isNumber(sizeValue)) {
    return `${styleKey}: span ${sizeValue};`;
  }

  return styleBreakpointsObject(sizeValue, styleKey, 'display: none;', 'display: block;', 'span');
};
