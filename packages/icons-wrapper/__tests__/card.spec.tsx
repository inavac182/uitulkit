import * as React from 'react';
import { render } from '@testing-library/react';
import { UiTulkitCard } from '../src/';

test('renders learn react link', () => {
  const expectedText = 'Hey!';
  const { getByText } = render(<UiTulkitCard text={expectedText} />);
  const textElement = getByText(expectedText);
  expect(textElement).toBeInTheDocument();
});
