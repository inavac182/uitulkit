import * as React from 'react';
import styled from 'styled-components';

import { ThemeProp, ThemesCategoriesLevel, ThemesCategories, getValueFromTheme } from '@uitulkit/foundation';

interface UiTulkitDropdownProps {
  text?: string;
  theme?: ThemeProp;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props: UiTulkitDropdownProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  color: ${(props: UiTulkitDropdownProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitDropdownProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
`;

export const UiTulkitDropdown = (props: UiTulkitDropdownProps) => {
  const { text } = props;

  return <Div>{text}</Div>;
};
