import React from 'react';
import './Course.css'; // Import the CSS file
import image from './Images/Instructor.jpg'

export default function Course() {
  return (
    <div className="course-container">
      <div className="instructor-info">
        <img
          src={image}
          alt="Your Image"
          className="instructor-image"
        />
        <div className="instructor-description">
          <h2>About this Course</h2>
          <p className="course-description">
            Welcome to the Intermediate Algebra course! In this course, you will
            learn fundamental concepts of algebra and build a strong foundation
            for more advanced mathematical topics.
          </p>
        </div>
        <h2>Instructor Info</h2>
        <p>
          I am Tom Kaus, your instructor, and I am passionate about helping
          students succeed in their mathematical journey.
        </p>
      </div>
    </div>
  );
}
