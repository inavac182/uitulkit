import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';
import { ThemesCategoriesLevel, ThemesCategoriesLevelActions } from '@uitulkit/foundation';
import { UiTulkitIconsWrapper } from '@uitulkit/icons-wrapper';

import { Button } from '../';

interface UiTulkitCheckboxButtonProps {
  label: string;
  value: number | string;
  disabled?: boolean;
  index?: number;
  key?: number;
  defaultState?: boolean;
  controlled?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  className?: string;
  onChange?: (value: string | number, state?: boolean, index?: number) => void;
}

export const UiTulkitCheckboxButton = (props: UiTulkitCheckboxButtonProps) => {
  const [checked, setChecked] = React.useState(props.defaultState);
  const { onChange, controlled, index, value, defaultState, fullWidth, centered, className, label, disabled } = props;

  const handleOnClick = React.useCallback(() => {
    const newState = !checked;
    if (!controlled) {
      setChecked(newState);
    }

    if (onChange) {
      if (controlled) {
        onChange(value, newState, index);
      } else {
        onChange(value, newState);
      }
    }
  }, [checked, controlled]);

  React.useEffect(() => {
    if (controlled) {
      setChecked(defaultState);
    }
  }, [defaultState]);

  let levelAction = ThemesCategoriesLevelActions.DEFAULT;

  if ((controlled && defaultState) || (!controlled && checked)) {
    levelAction = ThemesCategoriesLevelActions.SUCCESS;
  }

  return (
    <Button
      fullWidth={fullWidth}
      centered={centered}
      key={index}
      onClick={handleOnClick}
      className={className}
      disabled={disabled}
    >
      <UiTulkitColsGrid gridCols={4} colsGap={5}>
        <UiTulkitGridItem colSpan={1} alignSelf="center">
          <UiTulkitIconsWrapper
            themeCategorieLevel={ThemesCategoriesLevel.ACTIONS}
            themeCategorieLevelActions={levelAction}
          >
            <FontAwesomeIcon icon={faCheckSquare} />
          </UiTulkitIconsWrapper>
        </UiTulkitGridItem>
        <UiTulkitGridItem colSpan={3} alignSelf="center" justifySelf="start">
          {label}
        </UiTulkitGridItem>
      </UiTulkitColsGrid>
    </Button>
  );
};
