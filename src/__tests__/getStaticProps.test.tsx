import { getStaticProps } from '../pages';

describe('getStaticProps', () => {
  it('should fetch games data and return props', async () => {
    const mockedGames = [{ fields: { name: 'Game 1' } }, { fields: { name: 'Game 2' } }];

    const mockedClient = {
      getEntries: jest.fn().mockResolvedValue({ items: mockedGames })
    };

    const result = await getStaticProps({
      client: mockedClient
    });

    expect(mockedClient.getEntries).toHaveBeenCalledWith({
      content_type: 'games'
    });

    expect(result.props.games).toEqual(mockedGames);
  });
});
