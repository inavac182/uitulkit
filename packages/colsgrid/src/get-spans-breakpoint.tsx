import { styleBreakpointsObject, BreakpointsObject } from '@uitulkit/foundation';
import { isNumber } from 'util';

const getSpanSize = (rowSize: string, defaultValue = '1fr') => (rowSize ? rowSize : defaultValue);

const getSpans = (spans: number) => (spans ? spans : 1);

export const getSpansBreakpoint = (
  spans: number | BreakpointsObject,
  size = '1fr',
  style: string,
  defaultStyle = '',
  defaultStatisStyle = ''
) => {
  if (isNumber(spans)) {
    return `${style}: repeat(${getSpans(spans)}, ${getSpanSize(size)});`;
  }

  return styleBreakpointsObject(spans, style, defaultStyle, defaultStatisStyle, 'repeat(', `, ${getSpanSize(size)})`);
};
