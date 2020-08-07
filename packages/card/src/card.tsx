import * as React from 'react';
import styled from 'styled-components';

import { ThemeProp, getColor } from '@uitulkit/foundation';

interface UiTulkitCardProps {
  text?: string;
  theme?: ThemeProp;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props: UiTulkitCardProps) => getColor('softBg', props?.theme?.main)};
  color: ${(props: UiTulkitCardProps) => getColor('soft', props?.theme?.main)};
  border: 2px solid ${(props: UiTulkitCardProps) => getColor('contrast', props?.theme?.main)};
`;

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { text } = props;

  return <Div>{text}</Div>;
};
