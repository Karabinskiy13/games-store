import styled from 'styled-components';

export const Counter = styled.div`
  width: 150px;
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
