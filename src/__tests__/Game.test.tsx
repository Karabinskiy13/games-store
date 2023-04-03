import React from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IGames, IGamesFields } from '../../contentful';
import Game from '../components/Game/Game';

const singleGame: IGames = {
  id: 1,
  quantity: 10,
  prevState: null,
  fields: {
    name: 'name',
    description: 'description',
    price: 100,
    releaseDate: '2020',
    platform: 'PS4',
    genres: 'action'
  },
  sys: {
    id: '1',
    type: 'type',
    createdAt: '01.01.2023',
    updatedAt: '02.02.2023',
    locale: 'locale',
    contentType: {
      sys: {
        id: 'games',
        linkType: 'ContentType',
        type: 'Link'
      }
    }
  }
};

describe('<SinglePicture>', () => {
  test('Should render component', () => {
    const { asFragment } = render(<Game game={singleGame} showModal={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should call a callback when the card is clicked', async () => {
    const showModalCb = jest.fn(() => true);
    render(<Game game={singleGame} showModal={showModalCb} />);
    const user = userEvent.setup();
    await user.click(screen.getByAltText('poster'));
    expect(showModalCb).toBeCalledWith(true);
  });

  test('Should display image from props', async () => {
    render(<Game game={singleGame} showModal={jest.fn()} />);
    await screen.findAllByAltText('poster');
    expect(screen.getByAltText('poster')).toHaveAttribute('src', '/image.png');
  });
});
