import * as React from 'react';
import styled from 'styled-components';

import { getValueFromTheme, ThemesCategories, ThemesCategoriesLevel, ThemeProp } from '@uitulkit/foundation';

interface UiTulkitParagraphProps {
  children?: React.ReactNode;
  theme?: ThemeProp;
  className?: string;
}

const DivParagraph = styled.div`
  font-size: 1em;
  text-align: justify;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) =>
    getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
`;

export const UiTulkitParagraph = (props: UiTulkitParagraphProps) => {
  return <DivParagraph {...props}>{props.children}</DivParagraph>;
};

UiTulkitParagraph.displayName = 'UiTulkitParagraph';
