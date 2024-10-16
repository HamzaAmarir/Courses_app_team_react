import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/add-course">Add Course</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
