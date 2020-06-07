import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from '../src/components';

test('renders learn react link', () => {
  const expectedText = 'Hey!';
  const { getByText } = render(<App />);
  const linkElement = getByText(expectedText);
  expect(linkElement).toBeInTheDocument();
});
