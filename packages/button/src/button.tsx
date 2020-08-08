import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import { ThemeProp, getValueFromTheme, ThemesCategoriesLevel, ThemesCategories } from '@uitulkit/foundation';

interface UiTulkitButtonProps {
  children?: React.ReactNode;
  className?: string;
  theme?: ThemeProp;
  width?: string;
  height?: string;
  value?: string | number;
  name?: string;
  id?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button<UiTulkitButtonProps>`
  width: ${(props: UiTulkitButtonProps) => (props.width ? props.width : '100%')};
  cursor: pointer;
  border-radius: 3px;
  background: ${(props: UiTulkitButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  color: ${(props: UiTulkitButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFT, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
`;

export const UiTulkitButton = (props: UiTulkitButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};
