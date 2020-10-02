import * as React from 'react';
import styled from 'styled-components';

import { getValueFromTheme, ThemesCategories, ThemesCategoriesLevel, ThemeProp } from '@uitulkit/foundation';

interface UiTulkitViewProps {
  children?: React.ReactNode;
  theme?: ThemeProp;
  className?: string;
  width?: string;
  id?: string;
  centered?: boolean;
}

const FullScreenDiv = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  background-color: ${(props) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
  color: ${(props) => getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.TEXT, props?.theme?.main)};
`;

const CenteredDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const UiTulkitView = (props: UiTulkitViewProps) => {
  if (props.centered) {
    return (
      <FullScreenDiv>
        <CenteredDiv {...props}>{props.children}</CenteredDiv>
      </FullScreenDiv>
    );
  }

  return <FullScreenDiv {...props}>{props.children}</FullScreenDiv>;
};

UiTulkitView.displayName = 'UiTulkitView';
