import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';
import { ThemesCategoriesLevel, ThemesCategoriesLevelActions } from '@uitulkit/foundation';
import { UiTulkitIconsWrapper } from '@uitulkit/icons-wrapper';

import { Button } from '.';

interface UiTulkitCheckboxButtonProps {
  label: string;
  defaultState?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  onChange?: (state?: boolean) => void;
  className?: string;
}

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
    <Button fullWidth={props.fullWidth} centered={props.centered} onClick={handleOnClick} className={props.className}>
      <UiTulkitColsGrid gridCols={4}>
        <UiTulkitGridItem colSpan={1} alignSelf="center">
          <UiTulkitIconsWrapper
            themeCategorieLevel={ThemesCategoriesLevel.ACTIONS}
            themeCategorieLevelActions={
              checked ? ThemesCategoriesLevelActions.SUCCESS : ThemesCategoriesLevelActions.DEFAULT
            }
          >
            <FontAwesomeIcon icon={faCheckSquare} />
          </UiTulkitIconsWrapper>
        </UiTulkitGridItem>
        <UiTulkitGridItem colSpan={3} alignSelf="center" justifySelf="start">
          {props.label}
        </UiTulkitGridItem>
      </UiTulkitColsGrid>
    </Button>
  );
};
