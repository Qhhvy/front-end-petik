import React from 'react';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import CourseCards from '../components/CourseCards';

const Courses = () => {
  return (
    <div>
      <NavbarComponent/>
      <CourseCards/>
      <Footer/>
    </div>
  );
};

export default Courses;
