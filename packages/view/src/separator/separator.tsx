import * as React from 'react';

import { UiTulkitElements, getValueFromTheme, ThemesCategories, ThemesCategoriesLevel } from '@uitulkit/foundation';
import styled from 'styled-components';

interface UiTulkitSeparatorProps extends UiTulkitElements {
  width?: string;
}

const SeparatorDiv = styled.div<UiTulkitSeparatorProps>`
  ${(props) => (props?.width ? `width: ${props.width};` : 'width: 80%;')}
  background-color: ${(props) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.CONTRAST, props?.theme?.main)};
  height: 5px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const UiTulkitSeparator = (props: UiTulkitSeparatorProps) => {
  return <SeparatorDiv {...props} />;
};

UiTulkitSeparator.displayName = 'UiTulkitSeparator';
