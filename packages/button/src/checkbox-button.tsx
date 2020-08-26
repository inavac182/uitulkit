import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';
import { getValueFromTheme, ThemesCategories, ThemesCategoriesLevel, ThemeProp } from '@uitulkit/foundation';

import { Button } from '.';

interface UiTulkitCheckboxButtonProps {
  label: string;
  defaultState?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  onChange?: (state?: boolean) => void;
}

interface UiTulkitIconWrapperProps {
  themeCategorieLevel: ThemesCategoriesLevel;
  theme?: ThemeProp;
}

const Div = styled.div`
  ${(props: UiTulkitIconWrapperProps) =>
    `color: ${getValueFromTheme(ThemesCategories.COLORS, props.themeCategorieLevel, props?.theme?.main)}`}
`;

export const UiTulkitCheckboxButton = (props: UiTulkitCheckboxButtonProps) => {
  const [checked, setChecked] = React.useState(props.defaultState || false);
  const { onChange } = props;
  const handleOnClick = React.useCallback(() => {
    setChecked(!checked);

    if (onChange) {
      onChange(!checked);
    }
  }, [checked]);

  return (
    <Button fullWidth={props.fullWidth} centered={props.centered} onClick={handleOnClick}>
      <UiTulkitColsGrid gridCols={4}>
        <UiTulkitGridItem colSpan={1} alignSelf="center">
          <Div themeCategorieLevel={checked ? ThemesCategoriesLevel.CONTRAST : ThemesCategoriesLevel.SOFTBG}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </Div>
        </UiTulkitGridItem>
        <UiTulkitGridItem colSpan={3} alignSelf="center">
          {props.label}
        </UiTulkitGridItem>
      </UiTulkitColsGrid>
    </Button>
  );
};
