import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../redux/courseSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  const status = useSelector((state) => state.course.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
};

export default CourseList;
