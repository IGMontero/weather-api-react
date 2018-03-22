import React from 'react';

const SecondaryWeatherInfo = ({day}) =>{
  return(
    <div className="container secondary-weather-info">
      <div className="secondary-weather-info-text" >
        <p className="mb-0">Prob de precipitaciones: {day.precipitation}%</p>
        <p className="mb-0">Humedad: {day.humidity}%</p>
        <p className="mb-3">Viento: a {day.wind} km/h</p>
      </div>
    </div>
  )
}

export default SecondaryWeatherInfo;
