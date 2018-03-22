import React, { Component } from 'react';
import './App.css';
import MainWeatherInfo from './components/main-weather-info';
import SecondaryWeatherInfo from './components/secondary-weather-info';
import DayList from './components/day-list';
import request from 'superagent';

const API_KEY = '8afe24c50663dd8b5699b88221b69e20';
const CITY_ID = '3441575';


const data = [
  {
    location:'Pocitos, Montevideo',
    weekDay:"miércoles",
    maxTemp:'25',
    minTemp:'18',
    description:'Parcialmente nublado',
    image:'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    precipitation:'22',
    humidity:'61',
    wind:'19'
  },{
    location:'Pocitos, Montevideo',
    weekDay:"jueves",
    maxTemp:'20',
    minTemp:'11',
    description:'Mayormente soleado',
    image:'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    precipitation:'33',
    humidity:'40',
    wind:'28'
  },{
    location:'Pocitos, Montevideo',
    weekDay:"viernes",
    maxTemp:'15',
    minTemp:'8',
    description:'Mayormente lluvioso',
    image:'https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png',
    precipitation:'50',
    humidity:'70',
    wind:'35'
  },
  {
    location:'Pocitos, Montevideo',
    weekDay:"sábado",
    maxTemp:'19',
    minTemp:'11',
    description:'Soleado',
    image:'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    precipitation:'43',
    humidity:'67',
    wind:'15'
  },{
    location:'Pocitos, Montevideo',
    weekDay:"domingo",
    maxTemp:'15',
    minTemp:'8',
    description:'Mayormente lluvioso',
    image:'https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png',
    precipitation:'50',
    humidity:'70',
    wind:'35'
  }
]


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      data : data,
      selectedDay :data[0],
    }


  }

  render(){
    return(
      <div id="main-container" className="container">
        <div className="row">
        <div className="col-5">
          <MainWeatherInfo day={this.state.selectedDay} />
        </div>
        <div className="col-7">
          <SecondaryWeatherInfo day={this.state.selectedDay} />
        </div>
        <div className="col-12">
        </div>
        <div className="col-12">
          <DayList selectedDayIndex={this.state.data.indexOf(this.state.selectedDay)} onDaySelect={day => this.setState({selectedDay:day})} days={this.state.data} />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
