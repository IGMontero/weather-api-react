import React from 'react';
import DayListItem from './day-list-item';


const DayList = ({days,onDaySelect,selectedDayIndex})=>{
if(!days){
  return (
    <div>Loading...</div>
  )
}


const mappedDays = days.map((day,index)=>{
  return (
    <DayListItem
      onDaySelect={onDaySelect}
      day={day}
      key={index}
      selected={selectedDayIndex==index ? 1 : 0}
    />
 )
})

  return(
    <div className="container day-list">
    <ul className="list-inline">
    {mappedDays}
    </ul>
    </div>
  )
}


export default DayList;
