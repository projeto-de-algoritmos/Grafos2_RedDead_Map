import React from 'react';

import { Container, Text } from './styles';

const Button = ({text, onClick}) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  )
};

export { Button };