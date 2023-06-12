import React from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IGames } from '../../contentful';
import Game from '../components/Game/Game';
import GamesInfo from '../pages/games/[id]';

const singleGame: any = {
  id: 1,
  quantity: 10,
  prevState: null,
  fields: {
    name: 'name',
    description: 'description',
    price: 100,
    releaseDate: '2020',
    platform: 'PS4',
    genres: 'action',
    fullDescription: 'full description',
    backdrop: {
      fields: {
        file: {
          url: 'https://images.unsplash.com/photo-1500309447817-512216363500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        }
      }
    }
  }
};

describe('<GameFullInfo>', () => {
  test('Should render component', () => {
    const { asFragment } = render(<GamesInfo gamesInfo={singleGame} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should display poster', async () => {
    render(<GamesInfo gamesInfo={singleGame} />);
    await screen.findByTestId('wrapper');
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  test('Should render title of game', async () => {
    render(<GamesInfo gamesInfo={singleGame} />);
    await screen.findByText('name');
    expect(screen.getByText('name')).toBeInTheDocument();
  });

  test('Should render description of game', async () => {
    render(<GamesInfo gamesInfo={singleGame} />);
    await screen.findByText('full description');
    expect(screen.getByText('full description')).toBeInTheDocument();
  });

  test('Should render platform of game', async () => {
    render(<GamesInfo gamesInfo={singleGame} />);
    await screen.findByText('Aviable in PS4');
    expect(screen.getByText('Aviable in PS4')).toBeInTheDocument();
  });

  test('Should render price of game', async () => {
    render(<GamesInfo gamesInfo={singleGame} />);
    await screen.findByTestId('price');
    expect(screen.getByTestId('price')).toBeInTheDocument();
  });
});
