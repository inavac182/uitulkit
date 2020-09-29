import * as React from 'react';

import { UiTulkitHeading, UiTulkitText } from '@uitulkit/text';
import { UiTulkitCard } from '@uitulkit/card';

export const Cards = () => {
  return (
    <>
      <UiTulkitHeading level={1} separator="bottom" align="left">
        Cards
      </UiTulkitHeading>
      <UiTulkitText>
        {' '}
        Bring cards to the game{' '}
        <span role="img" aria-label="nice emoji">
          💼
        </span>
      </UiTulkitText>
      <UiTulkitCard text="This is a card..." />
      <UiTulkitCard
        className="all-margin-top-ten"
        text="This is a card with an image"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <UiTulkitCard
        className="all-margin-top-ten"
        headerLevel={2}
        header="woohaa!"
        text="This is a card with image, custom image height and header"
        imageHeight="200px"
        image="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
      />
    </>
  );
};
