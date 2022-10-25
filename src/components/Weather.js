import React from 'react'
import ReactDOM from 'react-dom/client'

export class WeatherBar extends React.Component {
  render() {
    return (
      <div className="bg-green-400 grow">weather</div>
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