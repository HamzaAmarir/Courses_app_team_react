import React from 'react';
import { useSelector } from 'react-redux';

const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Course List</h2>
      <ul className="list-group mt-4">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item">
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
