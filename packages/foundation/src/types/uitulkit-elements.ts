import * as React from 'react';
import { ThemeProp } from './theme-prop';

export interface UiTulkitElements {
  children?: React.ReactNode;
  className?: string;
  testId?: string;
  theme?: ThemeProp;
}
