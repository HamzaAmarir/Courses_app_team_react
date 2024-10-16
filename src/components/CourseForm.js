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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
