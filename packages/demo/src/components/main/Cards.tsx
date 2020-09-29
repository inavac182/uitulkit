import * as React from 'react';

import { UiTulkitHeading, UiTulkitText } from '@uitulkit/text';
import { UiTulkitCard } from '@uitulkit/card';
import { UiTulkitColsGrid, UiTulkitGridItem } from '@uitulkit/colsgrid';

export const Cards = () => {
  return (
    <>
      <UiTulkitHeading level={1} separator="bottom" align="left">
        Cards
      </UiTulkitHeading>
      <UiTulkitText className="all-margin-top-ten">
        {' '}
        Bring cards to the game{' '}
        <span role="img" aria-label="nice emoji">
          💼
        </span>
      </UiTulkitText>
      <UiTulkitCard className="all-margin-top-ten" text="This is a card..." />
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
      <UiTulkitColsGrid gridCols={3} colsGap={10} className="all-margin-top-ten">
        <UiTulkitGridItem>
          <UiTulkitCard
            headerLevel={2}
            extendHeight={true}
            header="yayy!"
            text="Card with internal link.... Have you seen this amazing buttons?"
            imageHeight="100px"
            link="/buttons/"
            image="https://i.insider.com/5ad4fd1bfacba823008b45e0?width=750&format=jpeg&auto=webp"
          />
        </UiTulkitGridItem>
        <UiTulkitGridItem>
          <UiTulkitCard
            headerLevel={2}
            extendHeight={true}
            header="Moonshot!"
            text="Card with external link.... Full deeplink? Here we go..."
            imageHeight="100px"
            externalLink="http://localhost:3000/cards/"
            image="https://images.theconversation.com/files/335463/original/file-20200515-138615-ay2p3z.jpg?ixlib=rb-1.1.0&rect=0%2C613%2C5607%2C2799&q=45&auto=format&w=1356&h=668&fit=crop"
          />
        </UiTulkitGridItem>
        <UiTulkitGridItem>
          <UiTulkitCard
            headerLevel={2}
            extendHeight={true}
            header="Sunshine"
            text="Card without link but onclick handler"
            imageHeight="100px"
            identifier="Sunshine"
            onClick={(identifier?: string) => {
              console.log(`Clicked on ${identifier}`);
            }}
            image="https://s7d2.scene7.com/is/image/TWCNews/04-28-2020_Weather_Blog_Sunshine_Yoga"
          />
        </UiTulkitGridItem>
      </UiTulkitColsGrid>
    </>
  );
};
