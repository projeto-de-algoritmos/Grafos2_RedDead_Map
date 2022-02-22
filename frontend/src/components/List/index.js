import React from 'react';

import { Container, TitleContainer, Title, ListContainer, ItemsContainer, ItemsWrapper, Item, DistanceText, ImageContainer, Image } from './styles';

const List = ({items, title, imageSrc, distance}) => {
  return (
    <Container>
      {title && 
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      }
      <ListContainer title={title}>
        <ItemsContainer>
          <ItemsWrapper>
            {items.map((text,index)=>(
              <Item key={index}>{index+1}. {text}</Item>
            ))}
          </ItemsWrapper>
          <DistanceText>Distância total: {distance} m</DistanceText>
        </ItemsContainer>
        <ImageContainer>
          <Image alt='Horse Man' src={imageSrc} />
        </ImageContainer>
      </ListContainer>
    </Container>
  )
};

export { List };