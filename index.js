import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import FeaturedArticlesAndTutorials from './ArticleTutorial';
import Form from './SignUp';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <FeaturedArticlesAndTutorials />
    <Form />
    <Footer />
  </div>
);


