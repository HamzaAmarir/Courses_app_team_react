import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.course.courses.find((c) => c.id === parseInt(courseId))
  );

  if (!course) {
    return <div className="container mt-5"><h2>Course not found</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Comments</h3>
      <ul className="list-group">
        {/* Assume comments are available; adapt based on your data structure */}
        {course.comments && course.comments.map((comment, index) => (
          <li key={index} className="list-group-item">{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
