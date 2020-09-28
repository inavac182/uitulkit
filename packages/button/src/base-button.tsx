import styled from 'styled-components';

import { UiTulkitElements, getValueFromTheme, ThemesCategoriesLevel, ThemesCategories } from '@uitulkit/foundation';

export interface UiTulkitBaseButtonProps extends UiTulkitElements {
  fullWidth?: boolean;
  height?: string;
  value?: string | number;
  name?: string;
  id?: string;
  centered?: boolean;
  padding?: number;
  disabled?: boolean;
}

export const Button = styled.button<UiTulkitBaseButtonProps>`
  ${(props: UiTulkitBaseButtonProps) => props.fullWidth && `width: 100%;`};
  ${(props: UiTulkitBaseButtonProps) => props.centered && `margin: 0 auto;`};
  ${(props: UiTulkitBaseButtonProps) => (props.padding ? `padding: ${props.padding}px` : 'padding: 10px;')};
  cursor: pointer;
  border-radius: 3px;
  display: block;
  background: ${(props: UiTulkitBaseButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  color: ${(props: UiTulkitBaseButtonProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFT, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitBaseButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  &:hover {
    background-color: ${(props: UiTulkitBaseButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
  }
  &:active {
    background-color: ${(props: UiTulkitBaseButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  }
  &:disabled {
    background: ${(props: UiTulkitBaseButtonProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  }
`;
