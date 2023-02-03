import styled from 'styled-components';

export const GamesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;
  align-items: flex-start;
  row-gap: 110px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
  }
`;

export const GameItem = styled.div`
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: center;
`;
