import React, { useState } from 'react';
import { useAppStore } from '../../../store/store';
import { Button } from '@mui/material';
import { FeedBack } from '../../styles/PurchaseModal';

export type CommentsProps = {
  currentPage: string;
};

const Comments = ({ currentPage }: CommentsProps) => {
  const [comment, setComment] = useState<string>('');
  const { addComment } = useAppStore();
  const { comments } = useAppStore();

  const currentComments = comments.filter((comment) => comment.currentPage === currentPage);

  return (
    <div>
      <FeedBack placeholder="Comment" type="text" onChange={(e) => setComment(e.target.value)} />
      <Button style={{ maxWidth: '100px' }} onClick={() => addComment(comment, currentPage)}>
        Add
      </Button>
      <div>
        {currentComments &&
          currentComments.map((comment) => <div key={comment.id}>{comment.comment}</div>)}
      </div>
    </div>
  );
};

export default Comments;
