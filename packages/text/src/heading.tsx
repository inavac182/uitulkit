import * as React from 'react';
import styled from 'styled-components';

import { OneSideBorder, ThemeProp, AlignText } from '@uitulkit/foundation';

interface UiTulkitHeadingProps {
  children?: React.ReactNode;
  theme?: ThemeProp;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  separator?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'left' | 'center' | 'right';
  inline?: boolean;
}

const headingStyles = (props: UiTulkitHeadingProps) => `
  ${props?.separator ? OneSideBorder(props.separator, 1, 'solid') : ''};
  ${props?.align ? AlignText(props.align) : ''};
  ${props?.inline ? `display: inline` : ''};
`;

const HeadingH1 = styled.h1<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

const HeadingH2 = styled.h2<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

const HeadingH3 = styled.h3<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

const HeadingH4 = styled.h4<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

const HeadingH5 = styled.h5<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

const HeadingH6 = styled.h6<UiTulkitHeadingProps>`
  ${(props) => headingStyles(props)}
`;

export const UiTulkitHeading = (props: UiTulkitHeadingProps) => {
  switch (props.level) {
    case 6:
      return <HeadingH6 {...props}>{props.children}</HeadingH6>;
    case 5:
      return <HeadingH5 {...props}>{props.children}</HeadingH5>;
    case 4:
      return <HeadingH4 {...props}>{props.children}</HeadingH4>;
    case 3:
      return <HeadingH3 {...props}>{props.children}</HeadingH3>;
    case 2:
      return <HeadingH2 {...props}>{props.children}</HeadingH2>;
    default:
    case 1:
      return <HeadingH1 {...props}>{props.children}</HeadingH1>;
  }
};

UiTulkitHeading.displayName = 'UiTulkitHeading';
