import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../redux/courseSlice';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { title, description };
    dispatch(addCourse(newCourse));
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add Course</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="title">Course Title:</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Course Description:</label>
          <textarea 
            className="form-control" 
            id="description" 
            rows="3" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Add Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
