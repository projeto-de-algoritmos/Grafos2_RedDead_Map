import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  background: ${colors.red};
  height: 80px;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

export const Logo = styled.img`
  width: 140px;
  height: 130px;
`;

export const Text = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 28px;
  color: ${colors.white};
  margin-left: 20px;
`