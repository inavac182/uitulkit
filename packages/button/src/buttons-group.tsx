import * as React from 'react';
import styled from 'styled-components';

import { UiTulkitElements } from '@uitulkit/foundation';
import { UiTulkitColsGrid } from '@uitulkit/colsgrid';

interface ButtonsGroupProps extends UiTulkitElements {
  children?: React.ReactNode;
  type?: 'list' | 'bar';
  buttonsGap?: number;
}

const ButtonsGroup = styled.div<ButtonsGroupProps>`
  width: 100%;

  button {
    width: 100%;
  }
`;

export const UiTulkitButtonsGroup = (props: ButtonsGroupProps) => {
  if (props?.type === 'bar') {
    return (
      <>
        {props.children && (
          <UiTulkitColsGrid gridCols={Object.keys(props.children).length} colsGap={props?.buttonsGap}>
            {Object.keys(props.children).map((key) => (
              <React.Fragment key={key}>{props.children && props.children[key]}</React.Fragment>
            ))}
          </UiTulkitColsGrid>
        )}
      </>
    );
  } else {
    return (
      <>
        {props.children && (
          <UiTulkitColsGrid gridCols={1} gridRows={Object.keys(props.children).length} rowsGap={props?.buttonsGap}>
            {Object.keys(props.children).map((key) => (
              <React.Fragment key={key}>{props.children && props.children[key]}</React.Fragment>
            ))}
          </UiTulkitColsGrid>
        )}
      </>
    );
  }
};
