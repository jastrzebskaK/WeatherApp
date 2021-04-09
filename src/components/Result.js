import React from 'react';
import './Result.css'




const Result = props => {

  const {date, city, sunrise, sunset, temp, pressure,  wind, err} = props.weather;

  let content = null;

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()

    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    content = (
      <div>
        <h3>Pogoda dla miasta {city}</h3>
        <h4>Stan na {date}</h4>
        <h4>Temperatura powietrza: {temp} &#176;C</h4>
        <h4>Wschód słońca: {sunriseTime}</h4>
        <h4>Zachód słońca: {sunsetTime}</h4>
        <h4>Ciśnienie atmosferyczne: {pressure} hPa</h4>
        <h4>Prędkość wiatru: {wind} m/s</h4>

       </div>
    )
  }

  return (
  
    <div className="result">
      {err ? `Brak danych dla miasta  ${city}` : content}
    </div>
    );
}
 
export default Result;
