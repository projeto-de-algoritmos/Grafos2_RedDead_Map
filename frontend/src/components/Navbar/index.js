import React from 'react';
import { Container , Logo } from './styles';

const Navbar = ({ imageSrc }) => (
  <Container>
    <Logo alt='Red Dead Redemption II' src={imageSrc} />
  </Container>
)

export { Navbar };