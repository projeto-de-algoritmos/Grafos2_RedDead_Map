import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${colors.black};
  width: 400px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.black};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px;
`

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 28px;
`

export const ListContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  background: ${colors.white};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: space-between;
`;

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemsWrapper = styled.ul`
`;

export const Item = styled.li`
  margin: 7px 0 7px 0;
`;

export const DistanceText = styled.p`
  margin-top: 20px;
  color: ${colors.red};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const Image = styled.img`
  height: 200px;
`;