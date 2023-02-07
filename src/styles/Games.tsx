import styled from 'styled-components';

export const GamesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  align-items: flex-start;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
  }
`;

export const Button = styled.button`
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  touch-action: manipulation;
  width: auto;
  &:hover {
    background-color: #374151;
  }
  &:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  .poster {
    border-radius: 30px;
    :hover {
      transform: scale(1.05);
      transition: 0.4s;
      border: solid 6px black;
    }
  }
`;
