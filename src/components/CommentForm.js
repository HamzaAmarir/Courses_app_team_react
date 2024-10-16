import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addComment } from '../slices/CourseSlice';

const CommentForm = ({ courseId }) => {
  const [comment, setComment] = useState('');
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addComment({ courseId, comment }));
    // setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Add a comment" 
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
