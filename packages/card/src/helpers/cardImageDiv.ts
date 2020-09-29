import styled from 'styled-components';

interface CardImageDivProps {
  image: string;
  imageHeight?: string;
}

export const CardImageDiv = styled.div<CardImageDivProps>`
  min-height: 100px;
  width: 100%;

  ${(props: CardImageDivProps) => {
    return `
      min-height: ${props?.imageHeight || '100px'};
      background: url(${props?.image}) no-repeat center;
      background-size: cover;
    `;
  }};
`;
