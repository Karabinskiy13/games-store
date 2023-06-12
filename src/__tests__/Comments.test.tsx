import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useAppStore } from '../../store/store';
import Comments from '../components/Comments/Comments';

jest.mock('../../store/store');

describe('Comments component', () => {
  const addComment = jest.fn();
  const comments = [
    { id: 1, comment: 'New comment', currentPage: 'examplePage' },
    { id: 2, comment: 'New comment', currentPage: 'otherPage' }
  ];

  beforeEach(() => {
    (useAppStore as jest.Mock).mockReturnValue({ addComment, comments });
  });

  test('renders without errors', () => {
    render(<Comments currentPage="examplePage" />);
  });

  test('updates comment state on input change', () => {
    const { getByPlaceholderText } = render(<Comments currentPage="examplePage" />);
    const inputElement = getByPlaceholderText('Comment') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'New comment' } });

    expect(inputElement.value).toBe('New comment');
  });

  test('calls addComment function on button click', () => {
    const { getByText } = render(<Comments currentPage="examplePage" />);
    const addButton = getByText('Add');

    fireEvent.click(addButton);

    expect(addComment).toHaveBeenCalledWith('', 'examplePage');
  });

  test('displays comments for the current page', () => {
    const { getByText, queryByText } = render(<Comments currentPage="examplePage" />);

    const comment1 = getByText('New comment');
    const comment2 = queryByText('Comment 2');

    expect(comment1).toBeInTheDocument();
    expect(comment2).toBeNull();
  });
});
