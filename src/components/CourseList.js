import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, fetchCourses } from '../redux/courseSlice';
import EditCourseForm from './EditCourseForm'; 
const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleEditClick = (courseId) => {
    setSelectedCourseId(courseId); 
  };

  const handleCloseForm = () => {
    setSelectedCourseId(null); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Course List</h2>
      <ul className="list-group mt-4">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{course.title}</h5>
              <p>{course.description}</p>
            </div>
            <div>
              <button
                className="btn btn-info mx-1"
                onClick={() => handleEditClick(course.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteCourse(course.id))} 
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedCourseId && (
        <EditCourseForm
          courseId={selectedCourseId} 
          onClose={handleCloseForm}  
        />
      )}
    </div>
  );
};

export default CourseList;
