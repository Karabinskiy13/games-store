import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  max-height: 1000px;
  bgcolor: black;
  border: 2px solid black;
  box-shadow: 24;
  p: 4;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-height: 800px;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
