import React from 'react';
import '../App.css';

const MainWeatherInfo = ({day}) =>{
  if(!day){
    return <div>Loading...</div>
  }
    return(
      <div className="container main-weather-info">
        <div className="row">
          <div className="col-12 location-container">
          <p className="mb-0 location-name">{day.location}</p>
          <p className="mb-0 location-time">{day.weekDay}</p>
          <p className="location-weather" >{day.description}</p>
          </div>
          <div className="col-12">
          <img className="weather-miniature" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <span className="temperature-number mt-2">{day.maxTemp}°</span>
          </div>
        </div>
      </div>
    )
}

export default MainWeatherInfo;
