import styled from 'styled-components';

import { ThemesCategoriesLevel, ThemesCategories, getValueFromTheme } from '@uitulkit/foundation';
import { UiTulkitCardProps } from '../types';

export const CardDiv = styled.div<UiTulkitCardProps>`
  border-radius: 3px;

  ${(props: UiTulkitCardProps) => {
    return `
      background: ${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
      color:${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.TEXT, props?.theme?.main)};
      border: 1px solid ${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
      text-align: ${props?.textAlign || 'left'};
      ${props.onClick !== undefined ? 'cursor: pointer;' : ''}
      ${props.extendHeight && 'height: 99%;'}`;
  }}
`;
