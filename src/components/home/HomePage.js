import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>Weather App</h1>
        <p>Wipro Weather App test for Front-End Developer role using React and ES6 for a responsive web app.</p>
        <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
      </div>
    ) ;
  }
}

export default HomePage;
