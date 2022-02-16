import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;

export const IntroSection = styled.div`
  width: 800px;
  border-radius: 8px;
  background: black;
  color: white;
  padding: 10px;
  margin-bottom: 30px;
`;

export const IntroText = styled.p`
  color: colors.white;
`;

export const SelectSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const SelectContainer = styled.div`
  width: 330px;
`

export const ErrorMessageContainer = styled.div`
  align-self: start;
  margin: 10px 0 0 545px;
`;

export const ErrorMessage = styled.p`
  color: ${colors.red};
`;

export const PathSection = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const MapSection = styled.img`
	margin-top: 35px;
  width: 60%;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100%;
  height: 120px;
  margin-top: auto;
  color: white;
  font-family: 'Roboto';
`;