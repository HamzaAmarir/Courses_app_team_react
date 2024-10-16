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
    <div className="mt-4">
      <h4>Add a Comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea 
            className="form-control" 
            rows="3" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
