import React from 'react';
import $ from 'jquery';
import Time from 'react-time';
import moment from 'moment';


class WeatherPage extends React.Component {

  constructor() {
    super();
    this.state = {
      'city': '',
      'country':"GB",
      'cnt': 5,
      'lists': [],
      'time': '',
      'day': ''
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the Page
   const url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric,GB&cnt=5&APPID=0347c864d2bf42c0018f6c88f5869e61";
               
    $.get(url, (data) => {
      this.setState({
        city: data.city.name,
        country: data.city.country,
        count: data.cnt,
        lists: data.list,
        time: data.list.dt
      });
    });
  }

  render() {
    // Converting Datetime 
    let date = this.state.day;
      
    // Iterating through list data for weather results
    const lists = this.state.lists.map((list, index) => {
    let result = moment.unix(list.dt).format("llll");

        return (
            <div key={index}>
              
              <h4>{result}</h4> <br />
              
              <h5><strong>Temperature: Day:</strong> {list['temp']['day']} | Night: {list['temp']['night']} | Morning: {list['temp']['morn']}</h5>

              <h5><strong>Main:</strong> <i>{list['weather'][0]['main']}</i></h5>

              <h5><strong>Humidity:</strong> {list['humidity']}</h5>

              <h5><strong>Speed:</strong> {list['speed']}</h5>

              <h5><strong>Clouds:</strong> {list['clouds']}</h5>

              <h5><strong>Description:</strong> <i>{list['weather'][0]['description']}</i> <span><img src="http://openweathermap.org/img/w/10d.png" /></span></h5>
            
              <div className="border-separator">&nbsp;</div>

            </div>
          );
      });


    return (
      <div className="jumbotron">        
          <div className="header-text">
              <h3>Please await {this.state.country} weather forecast for {this.state.city} ... </h3>
          </div>
          <blockquote>Weather Forecast for next {this.state.count} days</blockquote>
        
        <ul>
          <li>{lists}</li>
        </ul>
      </div>
    );
  }
}

export default WeatherPage;
