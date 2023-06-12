import React from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from '../components/Game/Game';
import ModalView, { ModalProps } from '../components/ModalView/ModalView';

const modalProps: ModalProps = {
  show: true,
  name: 'name',
  url: '/image.png',
  hideModal: jest.fn(() => false)
};

describe('<ModalView>', () => {
  test('Should render component', () => {
    const { asFragment } = render(<ModalView {...modalProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should display modal view from props', async () => {
    render(<ModalView {...modalProps} />);
    await screen.findAllByAltText('modal__image');
    expect(screen.getByAltText('modal__image')).toHaveAttribute('src', '/image.png');
  });
});
