import React from 'react';

import { Modal } from '@mui/material';
import { StyledModal } from '../../styles/ModalView';

type Props = {
  show: boolean;
  name?: string;
  hideModal: () => void;
};

const ModalView = ({ show, name, hideModal }: Props) => {
  return (
    <Modal open={show} onClose={() => hideModal()} aria-describedby="modal-modal-picture">
      <StyledModal>
        <img
          className="modal__image"
          alt="modal__image"
          src={name}
          style={{ width: '100%', maxHeight: '800px' }}
        />

        <div>{name}</div>
      </StyledModal>
    </Modal>
  );
};

export default ModalView;
