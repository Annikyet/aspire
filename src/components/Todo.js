import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'


export class TodoBar extends React.Component {
  render() {
    return (
      <div className="min-w-[25vw] bg-red-400">todos</div>
    );
  }
}

export class TodoPane extends React.Component {
  render() {
    return (
      <div className="hidden md:block md:w-[25vw] bg-red-300">todoPane</div>
    );
  }
}