import React from 'react';
import './Footerstyle.css'; // Import the CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a href="https://www.gallup.unm.edu/" target="_blank" rel="noopener noreferrer">
          UNM Gallup
        </a>{' '}
        <span className="centered-text">&copy; 2023 Tom Kaus</span>{' '}
        <a href="https://www.gallup.unm.edu/academics/calendar.html" target="_blank" rel="noopener noreferrer">
          Academic Calendar
        </a>
      </p>
    </footer>
  );
}

export default Footer;
