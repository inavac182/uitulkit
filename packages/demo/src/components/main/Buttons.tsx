import * as React from 'react';

import { UiTulkitHeading, UiTulkitText, UiTulkitParagraph } from '@uitulkit/text';
import {
  UiTulkitButton,
  UiTulkitButtonsGroup,
  UiTulkitCheckboxButton,
  UiTulkitCheckboxesGroup,
} from '@uitulkit/button';
import { UiTulkitSeparator } from '@uitulkit/view';

export const Buttons = () => {
  return (
    <>
      <UiTulkitHeading level={1} separator="bottom" align="left">
        Buttons
      </UiTulkitHeading>
      <UiTulkitText>
        {' '}
        Just A Button{' '}
        <span role="img" aria-label="nice emoji">
          💁🏻‍♂️
        </span>
      </UiTulkitText>
      <UiTulkitButton className="all-margin-bottom-five" centered={true}>
        {' '}
        Button{' '}
      </UiTulkitButton>
      <UiTulkitSeparator />

      <UiTulkitHeading level={2} separator="bottom" align="left">
        Full Width
      </UiTulkitHeading>
      <UiTulkitButton className="all-margin-bottom-five" fullWidth={true}>
        {' '}
        Button{' '}
      </UiTulkitButton>
      <UiTulkitSeparator />
      <UiTulkitParagraph>
        <UiTulkitText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum commodo dolor, ac iaculis nisl
          iaculis in. Maecenas placerat pellentesque sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce posuere diam et vulputate bibendum. Cras ac lorem in libero ullamcorper cursus. Proin posuere,
          nulla nec tempus dictum, lectus sapien rutrum libero, et egestas quam dolor id est. Ut eu elit ut sapien
          auctor mattis.
        </UiTulkitText>
        <UiTulkitText>
          Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas
          condimentum velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula,
          eget convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend
          ante. Ut sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
        </UiTulkitText>
      </UiTulkitParagraph>
      <UiTulkitSeparator />

      <UiTulkitHeading level={2} separator="bottom" align="left">
        Buttons Group
      </UiTulkitHeading>
      <UiTulkitButtonsGroup buttonsGap={5}>
        <UiTulkitButton> First Button </UiTulkitButton>
        <UiTulkitButton> Second Button </UiTulkitButton>
      </UiTulkitButtonsGroup>
      <UiTulkitSeparator />
      <UiTulkitButtonsGroup type="bar" buttonsGap={10}>
        <UiTulkitButton> First Button </UiTulkitButton>
        <UiTulkitButton> Second Button </UiTulkitButton>
        <UiTulkitButton> Third Button </UiTulkitButton>
        <UiTulkitButton> Fourth Button </UiTulkitButton>
      </UiTulkitButtonsGroup>
      <UiTulkitSeparator />
      <UiTulkitParagraph>
        <UiTulkitText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum commodo dolor, ac iaculis nisl
          iaculis in. Maecenas placerat pellentesque sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce posuere diam et vulputate bibendum. Cras ac lorem in libero ullamcorper cursus. Proin posuere,
          nulla nec tempus dictum, lectus sapien rutrum libero, et egestas quam dolor id est. Ut eu elit ut sapien
          auctor mattis.
        </UiTulkitText>
        <UiTulkitText>
          Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas
          condimentum velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula,
          eget convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend
          ante. Ut sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
        </UiTulkitText>
      </UiTulkitParagraph>
      <UiTulkitSeparator />

      <UiTulkitHeading level={2} separator="bottom" align="left">
        {' '}
        Checkboxes{' '}
      </UiTulkitHeading>
      <UiTulkitCheckboxButton label="Checkbox" className="all-margin-bottom-five" value="check" />
      <UiTulkitParagraph>
        <UiTulkitText>
          Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas
          condimentum velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula,
          eget convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend
          ante. Ut sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
        </UiTulkitText>
      </UiTulkitParagraph>

      <UiTulkitHeading level={2} separator="bottom" align="left">
        {' '}
        Checkboxes Group{' '}
      </UiTulkitHeading>
      <UiTulkitButtonsGroup type="bar" buttonsGap={10} className="all-margin-bottom-five">
        <UiTulkitCheckboxButton
          label="Checkbox"
          value="check1"
          onChange={(value, state) => {
            console.log(value);
            console.log(state);
          }}
        />
        <UiTulkitCheckboxButton
          label="Checkbox"
          value="check2"
          onChange={(value, state) => {
            console.log(value);
            console.log(state);
          }}
        />
        <UiTulkitCheckboxButton
          label="Checkbox"
          value="check3"
          onChange={(value, state) => {
            console.log(value);
            console.log(state);
          }}
        />
        <UiTulkitCheckboxButton
          label="Checkbox"
          value="check4"
          onChange={(value, state) => {
            console.log(value);
            console.log(state);
          }}
        />
      </UiTulkitButtonsGroup>

      <UiTulkitParagraph>
        <UiTulkitText>
          Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas
          condimentum velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula,
          eget convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend
          ante. Ut sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
        </UiTulkitText>
      </UiTulkitParagraph>

      <UiTulkitSeparator />

      <UiTulkitHeading level={2} separator="bottom" align="left">
        {' '}
        Checkboxes Controlled Group{' '}
      </UiTulkitHeading>
      <UiTulkitCheckboxesGroup
        type="bar"
        buttonsGap={10}
        controlled={true}
        onChange={(value) => {
          console.log(value);
        }}
        className="all-margin-bottom-five"
      >
        <UiTulkitCheckboxButton label="Checkbox" value="check1" />
        <UiTulkitCheckboxButton label="Checkbox" value="check2" />
        <UiTulkitCheckboxButton label="Checkbox" value="check3" />
        <UiTulkitCheckboxButton label="Checkbox" value="check4" />
      </UiTulkitCheckboxesGroup>

      <UiTulkitParagraph>
        <UiTulkitText>
          Vestibulum eget metus eu orci volutpat tempus. Fusce efficitur sed risus maximus fermentum. Maecenas
          condimentum velit quis tellus ultricies, vitae facilisis augue fringilla. Nulla imperdiet pellentesque ligula,
          eget convallis sem consectetur non. Ut eu mi varius, eleifend dolor a, sodales urna. Curabitur at eleifend
          ante. Ut sit amet nisi eu leo convallis mollis. Maecenas nec sollicitudin dolor.
        </UiTulkitText>
      </UiTulkitParagraph>

      <UiTulkitSeparator />
    </>
  );
};
