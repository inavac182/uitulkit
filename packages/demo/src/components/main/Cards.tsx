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
      <UiTulkitCard className="all-margin-top-ten" content={<p>This is the content</p>} />
      <UiTulkitCard
        className="all-margin-top-ten"
        header={<h2>This is the header</h2>}
        content={<p>This is the content</p>}
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <UiTulkitCard
        className="all-margin-top-ten"
        header={<h2>This is the header</h2>}
        content={<p>This is the content</p>}
        footer={<small>This is the footer</small>}
        imageHeight="200px"
        image="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
      />
      <UiTulkitHeading
        level={2}
        separator="bottom"
        align="left"
        className="all-margin-top-twenty all-margin-bottom-twenty"
      >
        Actionable Cards
      </UiTulkitHeading>
      <UiTulkitColsGrid gridCols={3} colsGap={10} className="all-margin-top-ten">
        <UiTulkitGridItem>
          <UiTulkitCard
            extendHeight={true}
            header={<h2>This is the header</h2>}
            content={<p>This is the content</p>}
            footer={<small>This is the footer</small>}
            imageHeight="100px"
            link="/buttons/"
            image="https://i.insider.com/5ad4fd1bfacba823008b45e0?width=750&format=jpeg&auto=webp"
          />
        </UiTulkitGridItem>
        <UiTulkitGridItem>
          <UiTulkitCard
            extendHeight={true}
            header={<h2>This is the header</h2>}
            content={<p>This is the content</p>}
            imageHeight="100px"
            externalLink="http://localhost:3000/cards/"
            image="https://images.theconversation.com/files/335463/original/file-20200515-138615-ay2p3z.jpg?ixlib=rb-1.1.0&rect=0%2C613%2C5607%2C2799&q=45&auto=format&w=1356&h=668&fit=crop"
          />
        </UiTulkitGridItem>
        <UiTulkitGridItem>
          <UiTulkitCard
            header={<h2>This is the header</h2>}
            content={<p>This is the content</p>}
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
