import React, { useState } from 'react';

import { Button, Modal } from '@mui/material';
import { StyledModal } from '../../styles/ModalView';
import { FeedBack } from '../../styles/PurchaseModal';

type Props = {
  show: boolean;
  name?: string;
  url?: string;
  hideModal: () => void;
};

const PurchaseModal = ({ show, hideModal }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    fetch('./api/contact', {
      method: 'post',
      body: JSON.stringify(data)
    });
    console.log(data);
  };
  return (
    <Modal open={show} onClose={() => hideModal()} aria-describedby="modal-modal-picture">
      <StyledModal>
        <form onSubmit={handleSubmit}>
          <FeedBack placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
          <FeedBack placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <FeedBack placeholder="Adress" type="text" onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit" onClick={() => hideModal()}>
            Send
          </Button>
        </form>
      </StyledModal>
    </Modal>
  );
};

export default PurchaseModal;
