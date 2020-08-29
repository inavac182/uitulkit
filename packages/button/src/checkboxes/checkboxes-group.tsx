import * as React from 'react';

import { UiTulkitElements } from '@uitulkit/foundation';
import { UiTulkitColsGrid } from '@uitulkit/colsgrid';

interface CheckboxValue {
  value: string | number;
  index: number;
}

interface ButtonsGroupProps extends UiTulkitElements {
  children: React.ReactElement[];
  type?: 'list' | 'bar';
  buttonsGap?: number;
  className?: string;
  controlled: boolean;
  onChange?: (checkboxValue: CheckboxValue) => void;
}

export const UiTulkitCheckboxesGroup = (props: ButtonsGroupProps) => {
  const [selectedCheckbox, setSelectedCheckbox] = React.useState(-1);
  const { controlled, type, onChange, children, buttonsGap, className } = props;

  if (!children) {
    throw 'CHECKBOXES GROUPS - Require children';
  }

  const numberOfCheckboxes = Object.keys(children).length;
  const childProps = {
    controlled,
    onChange: (value: number | string, index: number) => {
      setSelectedCheckbox(index);

      if (onChange) {
        onChange({
          index,
          value,
        });
      }
    },
  };

  if (type === 'bar') {
    return (
      <UiTulkitColsGrid gridCols={numberOfCheckboxes} colsGap={buttonsGap} className={className}>
        {children.map((child, key) =>
          React.cloneElement(child, { ...childProps, key, index: key, defaultState: selectedCheckbox === key })
        )}
      </UiTulkitColsGrid>
    );
  }

  return (
    <UiTulkitColsGrid gridCols={1} gridRows={numberOfCheckboxes} rowsGap={buttonsGap} className={className}>
      {children.map((child, key) =>
        React.cloneElement(child, { ...childProps, key, index: key, defaultState: selectedCheckbox === key })
      )}
    </UiTulkitColsGrid>
  );
};
