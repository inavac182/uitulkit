import * as React from 'react';
import styled from 'styled-components';

import * as Themes from '@uitulkit/themes';

interface UiTulkitCardProps {
  text: string;
  theme?: string;
}

const Div = styled.div`
  width: 100%;
  border-radius: 3px;

  background: ${(props) => Themes[props.theme.main].Colors.softBg};
  color: ${(props) => Themes[props.theme.main].Colors.soft};
  border: 2px solid ${(props) => Themes[props.theme.main].Colors.contrast};
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
