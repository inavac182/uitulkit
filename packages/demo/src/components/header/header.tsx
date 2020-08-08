import * as React from 'react';
import { UiTulkitHeading } from '@uitulkit/text';

export const Header = () => {
  return (
    <div>
      <UiTulkitHeading level={1} inline={true}>
        @UiTulkit
      </UiTulkitHeading>
    </div>
  );
};
