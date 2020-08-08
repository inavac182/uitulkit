import * as React from 'react';

import { UiTulkitHeading, UiTulkitText, UiTulkitParagraph } from '@uitulkit/text';

export const Buttons = () => {
  return (
    <>
      <UiTulkitHeading level={1} separator="bottom" align="left">
        Buttons
      </UiTulkitHeading>
      <UiTulkitText>
        {' '}
        Buttons everywhere!{' '}
        <span role="img" aria-label="nice emoji">
          💁🏻‍♂️
        </span>
      </UiTulkitText>
      <UiTulkitParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum commodo dolor, ac iaculis nisl iaculis
        in. Maecenas placerat pellentesque sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        posuere diam et vulputate bibendum. Cras ac lorem in libero ullamcorper cursus. Proin posuere, nulla nec tempus
        dictum, lectus sapien rutrum libero, et egestas quam dolor id est. Ut eu elit ut sapien auctor mattis.
        Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas condimentum
        velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula, eget
        convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend ante. Ut
        sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
      </UiTulkitParagraph>
    </>
  );
};
