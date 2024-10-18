import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCourse } from '../redux/courseSlice';

const EditCourseForm = ({ courseId, onClose }) => {
  const dispatch = useDispatch();
  
  const course = useSelector((state) =>
    state.course.courses.find((course) => course.id === courseId)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourse = {
      ...course,
      title,
      description,
    };

    dispatch(editCourse({ courseId: course.id, updatedCourse }));

    if (onClose) {
      onClose();
    }
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mt-4">
  <h2>Edit Course</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="courseTitle" className="form-label">Course Title:</label>
      <input
        type="text"
        className="form-control"
        id="courseTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="courseDescription" className="form-label">Description:</label>
      <textarea
        className="form-control"
        id="courseDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">Save Changes</button>
    <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Cancel</button>
  </form>
</div>

  );
};

export default EditCourseForm;
