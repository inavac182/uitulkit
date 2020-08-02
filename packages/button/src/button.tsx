import * as React from 'react';
import styled from 'styled-components';

import { themes, ThemeProp } from '@uitulkit/foundation';

interface UiTulkitButtonProps {
  children?: React.ReactNode;
  className?: string;
  theme?: string | ThemeProp;
  width?: string;
  height?: string;
  value?: string | number;
  name?: string;
  id?: string;
  onClick?: (e?: any) => void;
}

const Button = styled.button<UiTulkitButtonProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 3px;
  background: ${(props) => themes[props.theme.main].Colors.softBg};
  color: ${(props) => themes[props.theme.main].Colors.soft};
  border: 2px solid ${(props) => themes[props.theme.main].Colors.contrast};
`;

Button.defaultProps = {
  theme: {
    main: 'dark',
  },
};

export const UiTulkitButton = (props: UiTulkitButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};