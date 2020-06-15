import * as React from 'react';
import styled from 'styled-components';

import { themes } from '@uitulkit/foundation';

interface UiTulkitCardProps {
  text: string;
  theme?: string;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props) => themes[props.theme.main].Colors.softBg};
  color: ${(props) => themes[props.theme.main].Colors.soft};
  border: 2px solid ${(props) => themes[props.theme.main].Colors.contrast};
`;

Div.defaultProps = {
  theme: {
    main: 'dark',
  },
};

export const UiTulkitCard = (props: UiTulkitCardProps) => {
  const { text } = props;

  return <Div>{text}</Div>;
};
