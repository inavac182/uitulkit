import * as React from 'react';
import styled from 'styled-components';

import { ThemesCategoriesLevel, ThemesCategories, getValueFromTheme, UiTulkitElements } from '@uitulkit/foundation';

import { CardImageDiv } from '.';
import { UiTulkitCardProps } from '../types';

const Div = styled.div<UiTulkitCardProps>`
  border-radius: 3px;

  ${(props: UiTulkitCardProps) => {
    return `
      background: ${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
      color:${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.TEXT, props?.theme?.main)};
      border: 1px solid ${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};
      ${props?.onClick !== undefined ? 'cursor: pointer;' : ''}
      ${props?.extendHeight ? 'height: 99%;' : ''}`;
  }}
`;

const FooterDiv = styled.div<UiTulkitElements>`
  ${(props) => `
    background: ${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.MAIN, props?.theme?.main)};
    color:${getValueFromTheme(ThemesCategories.COLORS, ThemesCategoriesLevel.SOFTBG, props?.theme?.main)};`}
`;

export const CardWrapper = (props: UiTulkitCardProps) => {
  const { content, identifier, extendHeight, footer, image, imageHeight, className, header, onClick } = props;
  const cardContentClass = `all-padding-left-five all-padding-right-five all-margin-bottom-ten all-margin-top-ten`;
  const onClickHandler = () => {
    if (onClick) {
      onClick(identifier || undefined);
    }
  };

  return (
    <Div className={className} onClick={onClick ? onClickHandler : undefined} extendHeight={extendHeight}>
      {image && <CardImageDiv image={image} imageHeight={imageHeight} />}
      <div className={cardContentClass}>
        {header}
        {content}
        <FooterDiv>{footer}</FooterDiv>
      </div>
    </Div>
  );
};
