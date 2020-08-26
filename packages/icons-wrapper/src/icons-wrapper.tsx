import * as React from 'react';
import styled from 'styled-components';

import { getValueFromTheme, ThemesCategories, ThemesCategoriesLevel, UiTulkitElements } from '@uitulkit/foundation';

interface UiTulkitIconsWrapperProps extends UiTulkitElements {
  children?: React.ReactNode;
  themeCategorieLevel?: ThemesCategoriesLevel;
}

const Div = styled.div`
  ${(props: UiTulkitIconsWrapperProps) =>
    `color: ${getValueFromTheme(
      ThemesCategories.COLORS,
      props.themeCategorieLevel || ThemesCategoriesLevel.TEXT,
      props?.theme?.main
    )};`}
`;

export const UiTulkitIconsWrapper = (props: UiTulkitIconsWrapperProps) => {
  return <Div {...props}>{props.children}</Div>;
};
