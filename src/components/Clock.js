import React from 'react'
import ReactDOM from 'react-dom/client'

// TODO make the clock auto-update
// TODO allow clock format to be changed
// TODO allow clock styling to be changed
export class Clock extends React.Component {
  render() {
    let now = new Date()

    // format mins int to 0-padded 2 digit string
    let mins = now.getMinutes()
    let minStr = mins.toString()
    if (mins < 10) {
      minStr = '0' + minStr
    }

    let timeStr = `${now.getHours()}:${minStr}`

    return (
      <div className="mt-[24vh] p-8 text-center text-8xl bg-purple-500">{timeStr}</div>
    )
  }
}