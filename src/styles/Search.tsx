import styled from 'styled-components';

export const SearchStyle = styled.input`
  display: flex;
  width: 400px;
  height: 40px;
  margin-left: 300px;
  margin: 50px auto;
  background: #ffffff
  border-radius: 3px;
  border: 1px solid #fff;
  
  @media (max-width: 768px) {
    max-width: 360px
  }
`;
