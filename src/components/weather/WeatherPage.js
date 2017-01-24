import React from 'react';
import $ from 'jquery';
import Time from 'react-time';
import moment from 'moment';


class WeatherPage extends React.Component {

  constructor() {
    super();
    this.state = {
      city: '',
      "country":"GB",
      cnt: 0,
      lists: [],
      time: ''
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the Page
   const url = "http://api.openweathermap.org/data/2.5/forecast/city?id=2648110daily?q=London,GB&cnt=5&APPID=0347c864d2bf42c0018f6c88f5869e61";
    $.get(url, (data) => {
      //console.warn("WEATHER API CALL DELAYS... " + data);
      this.setState({
        city: data.city.name,
        count: data.cnt,
        country: data.city.country,
        lists: data.list,
        time: data.list.dt
      });
    });
  }

  render() {
    // Converting Datetime 
    let date = this.state.time;
    let result = moment(date).add(1, 'days').format("dddd, MMMM Do YYYY");

    // Iterating through list data for weather results
    const lists = this.state.lists.map((list, index) => {
        return (
            <div key={index}>
              <strong>Day: {result}</strong>
              <h5>Main Temperature: {list['main']['temp']}</h5>
              <strong>Description:</strong> <i>{list['weather'][0]['description']}</i>
              <hr />
            </div>
          );
      });


    return (
      <div className="jumbotron">
        <h3>Please await {this.state.country} weather forecast for {this.state.city} ... </h3>        
        <div>
            <blockquote>Forecast for {this.state.count} days</blockquote>
        </div>
        <ul>
          <li>{lists}</li>
        </ul>
      </div>
    );
  }
}

export default WeatherPage;
