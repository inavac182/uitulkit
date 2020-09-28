import * as React from 'react';
import styled from 'styled-components';

import { ThemeProp, ThemesCategoriesLevel, ThemesCategories, getValueFromTheme } from '@uitulkit/foundation';

interface UiTulkitCheckboxProps {
  text?: string;
  theme?: ThemeProp;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props: UiTulkitCheckboxProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  color: ${(props: UiTulkitCheckboxProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitCheckboxProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
`;

export const UiTulkitDropdown = (props: UiTulkitCheckboxProps) => {
  const { text } = props;

  return <Div>{text}</Div>;
};
