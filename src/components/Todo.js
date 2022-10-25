import React from 'react'
import ReactDOM from 'react-dom/client'


export class TodoBar extends React.Component {
  render() {
    return (
      <div className="min-w-[25vw] p-2">You got stuff to do!</div>
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