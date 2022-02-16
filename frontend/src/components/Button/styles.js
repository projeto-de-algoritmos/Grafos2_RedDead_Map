import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Container = styled.button`
  width: 120px;
  height: 40px;
  background: ${colors.red};
  border: 0;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(130%);
  }
`;

export const Text = styled.p`
  font-weight: 700;
  color: ${colors.white};
  font-size: 20px;
`;
