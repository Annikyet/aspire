import React from 'react'
import ReactDOM from 'react-dom/client'

// TODO change degrees with settings
// TODO show forecast on click
// TODO actually get real weather
export class WeatherBar extends React.Component {
  render() {
    let temp = 54 // Fahrenheit


    return (
      <div className="grow text-right p-2 text-2xl text-neutral-100/80">
        {temp}℉
        <i className="mdi mdi-weather-pouring pl-2"></i>  
      </div>
    )
  }
}

export class WeatherPane extends React.Component {
  render() {
    return (
      <div className="hidden md:block md:w-[25vw] bg-green-300">weatherPane</div>
    )
  }
}