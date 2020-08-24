import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import { UiTulkitElements, getValueFromTheme, ThemesCategoriesLevel, ThemesCategories } from '@uitulkit/foundation';

interface UiTulkitButtonProps extends UiTulkitElements {
  children?: React.ReactNode;
  fullWidth?: boolean;
  height?: string;
  value?: string | number;
  name?: string;
  id?: string;
  centered?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button<UiTulkitButtonProps>`
  ${(props: UiTulkitButtonProps) => props.fullWidth && `width: 100%;`};
  ${(props: UiTulkitButtonProps) => props.centered && `margin: 0 auto;`};
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  background: ${(props: UiTulkitButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  color: ${(props: UiTulkitButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFT, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  &:hover {
    background-color: ${(props: UiTulkitButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
  }
  &:active {
    background-color: ${(props: UiTulkitButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  }
`;

export const UiTulkitButton = (props: UiTulkitButtonProps) => {
  return <Button {...props}>{props?.children}</Button>;
};
