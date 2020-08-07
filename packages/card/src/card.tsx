import * as React from 'react';
import styled from 'styled-components';

import { ThemeProp, ThemesCategoriesLevel, ThemesCategories, getValueFromTheme } from '@uitulkit/foundation';

interface UiTulkitCardProps {
  text?: string;
  theme?: ThemeProp;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props: UiTulkitCardProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
  color: ${(props: UiTulkitCardProps) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  border: 2px solid
    ${(props: UiTulkitCardProps) =>
      getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
`;

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { text } = props;

  return <Div>{text}</Div>;
};
