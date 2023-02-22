import styled from 'styled-components';

export const CardItemTitle = styled.div`
  font-size: 15px;
`;

export const MainWrapper = styled.div`
  padding: 30px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cross = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: end;
`;

export const Counter = styled.div`
  max-width: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 50px;
  border: 0;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  background: #0052cc;
  color: #fff;
  appearance: none;
  outline: 0;
`;

export const InputQuantity = styled.input`
  width: 3%;
  text-align: center;
  background-color: #efefef;
  border: none;
  font-size: 1.5em;
`;

export const Buttons = styled.span`
  display: block;
  font-size: 25px;
  padding: 0 10px;
  cursor: pointer;
  color: #0052cc;
  user-select: none;
`;

export const EmptyCart = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
