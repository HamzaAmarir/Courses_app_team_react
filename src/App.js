import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import CourseForm from './components/CourseForm';
import Login from './components/Login';
import Navbar from './components/Navbar';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/add-course" element={<CourseForm />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
