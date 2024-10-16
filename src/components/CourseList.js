import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, fetchCourses } from '../redux/courseSlice';

const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCourses())
  },[dispatch])

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
            <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteCourse(course.id))}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
