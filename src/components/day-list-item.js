import React from 'react';

const DayListItem = ({day,onDaySelect,selected}) =>{
  const selectedClass = !selected ? '' : ' selected-item';
  const liClass = "list-inline-item day-list-item"+selectedClass;

  return(
    <li onClick={()=>onDaySelect(day)}  className={liClass}>
      <p className="mb-0">{day.weekDay}</p>
      <img src={day.image}/>
      <p className="mt-0"><strong>{day.maxTemp}°</strong> - <em>{day.minTemp}°</em></p>
    </li>
  )
}

export default DayListItem;
