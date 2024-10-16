import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.course.courses.find((c) => c.id === parseInt(courseId))
  );

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
