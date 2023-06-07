import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  backgroundrepeat: no-repeat;
`;

export const Title = styled.div`
  font-size: 50px;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export const Description = styled.div`
  padding: 30px;
  font-size: 20px;
`;

export const Platform = styled.div`
  padding: 30px;
`;

export const Price = styled.div`
  font-size: 20px;
`;

export const PriceButton = styled.div`
  max-width: 300px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
