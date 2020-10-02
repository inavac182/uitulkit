import * as React from 'react';
import styled from 'styled-components';

import {
  getValueFromTheme,
  ThemesCategories,
  ThemesCategoriesLevel,
  UiTulkitElements,
  ThemesCategoriesLevelActions,
} from '@uitulkit/foundation';

interface UiTulkitIconsWrapperProps extends UiTulkitElements {
  children?: React.ReactNode;
  themeCategorieLevel?: ThemesCategoriesLevel;
  themeCategorieLevelActions?: ThemesCategoriesLevelActions;
}

const Span = styled.span`
  ${(props: UiTulkitIconsWrapperProps) =>
    `color: ${getValueFromTheme(
      ThemesCategories.COLORS,
      props.themeCategorieLevel || ThemesCategoriesLevel.TEXT,
      props?.theme?.main,
      props?.themeCategorieLevelActions || ThemesCategoriesLevelActions.DEFAULT
    )};
    font-size: 1.6em;
  `}
`;

export const UiTulkitIconsWrapper = (props: UiTulkitIconsWrapperProps) => {
  return <Span {...props}>{props.children}</Span>;
};

UiTulkitIconsWrapper.displayName = 'UiTulkitIconsWrapper';
