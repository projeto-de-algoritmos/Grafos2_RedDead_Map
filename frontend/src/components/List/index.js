import React from 'react';

import { Container, TitleContainer, Title, ListContainer, ItemsContainer, Item, ImageContainer, Image } from './styles';

const List = ({items, title, imageSrc}) => {
  return (
    <Container>
      {title && 
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      }
      <ListContainer title={title}>
        <ItemsContainer>
          {items.map((text,index)=>(
            <Item key={index}>{index+1}. {text}</Item>
          ))}
        </ItemsContainer>
        <ImageContainer>
          <Image alt='Horse Man' src={imageSrc} />
        </ImageContainer>
      </ListContainer>
    </Container>
  )
};

export { List };