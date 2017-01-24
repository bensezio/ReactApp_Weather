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
      cnt: 5,
      lists: [],
      time: '',
      day: ''
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the Page
   const url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London,GB&cnt=5&APPID=0347c864d2bf42c0018f6c88f5869e61";

 
    $.get(url, (data) => {
      //console.warn("WEATHER API CALL DELAYS... " + data);
      this.setState({
        city: data.city.name,
        count: data.cnt,
        country: data.city.country,
        lists: data.list,
        time: data.list.dt,
        day: data.list.dt
      });
    });
  }

  render() {
    // Converting Datetime 
    
    // let start = moment([2017, 01, 24;]);
    // let end = moment([2017, 01, 29]);
    let date = this.state.day;
    let result = moment(date).format("llll");
      
    // Iterating through list data for weather results
    const lists = this.state.lists.map((list, index) => {
        return (
            <div key={index}>
              
              <h4>Day: {result}</h4>
              
              <h5 class="label label-primary">Day Temperature: {list['temp']['day']}</h5>

              <h5 class="label label-primary">Pressure: {list['pressure']}</h5>

              <h5 class="label label-primary">Humidity: {list['humidity']}</h5>

              <h5 class="label label-primary">Speed: {list['speed']}</h5>

              <h5 class="label label-primary">Degree: {list['deg']}</h5>

              <h5 class="label label-primary">Clouds: {list['clouds']}</h5>

              <strong>Description:</strong> <i>{list['weather'][0]['description']}</i>
            
              <div className="border-separator">&nbsp;</div>

            </div>
          );
      });


    return (
      <div className="jumbotron">        
          <div className="header-text">
              <h3>Please await {this.state.country} weather forecast for {this.state.city} ... </h3>
          </div>
          <blockquote>Forecast for {this.state.count} days</blockquote>
        
        <ul>
          <li>{lists}</li>
        </ul>
      </div>
    );
  }
}

export default WeatherPage;
