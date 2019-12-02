import React from 'react';
import Thumbnail from './Thumbnail'; // Import the Thumbnail component
import './App.css';


function Projects(props) {
  return(
    <div>
    <h1>Projects </h1>
    <Thumbnail
      link="/twitter"
      image="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      title="Twitter Newsfeed"
      category="Mobile App"
      />
      <Thumbnail
      link="/twitter"
      image="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      title="Twitter Newsfeed"
      category="Mobile App"
      />

    </div>
    )
}

export default Projects;
