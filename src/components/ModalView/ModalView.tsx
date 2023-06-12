import React from 'react';

import { Modal } from '@mui/material';
import { ModalImage, StyledModal } from '../../styles';

export type ModalProps = {
  show: boolean;
  name?: string;
  url?: string;
  hideModal: () => void;
};

const ModalView = ({ show, url, name, hideModal }: ModalProps) => {
  return (
    <Modal
      open={show}
      data-Testid="modalWrapper"
      onClose={() => hideModal()}
      aria-describedby="modal-modal-picture">
      <StyledModal>
        <ModalImage className="modal__image" alt="modal__image" src={url} />
        <div>{name}</div>
      </StyledModal>
    </Modal>
  );
};

export default ModalView;
