import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import './styles.css'; // Import the CSS

import Course from './Components/Course.js';
import Login from './Components/Login.js';
import Lesson from './Components/Lesson.js';
import Quiz from './Components/Quiz.js';
import Footer from './Components/Footer.js';

export default function App() {
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={() => handleLinkClick('Course')}
              >
                Intermediate Algebra 1215
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName="active"
                onClick={() => handleLinkClick('Login')}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lesson"
                activeClassName="active"
                onClick={() => handleLinkClick('Lesson')}
              >
                Lessons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                activeClassName="active"
                onClick={() => handleLinkClick('Quiz')}
              >
                Quiz
              </NavLink>
            </li>
          </ul>
        </nav>


        <Switch>

         <Route path ="/quiz">
          <Quiz/>
         </Route>

         <Route path ="/lesson">
          <Lesson/>
         </Route>

         <Route path ="/login">
          <Login/>
         </Route>

         <Route path ="/">
          <Course/>
         </Route>


        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
