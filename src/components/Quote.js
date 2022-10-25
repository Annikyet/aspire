import React from 'react'
import ReactDOM from 'react-dom/client'

// TODO actually get quotes from API
// TODO make styles like p-2 universal and configurable
// TODO style for background
export class Quote extends React.Component {
  render() {
    let quote = "mrow mrow mROA MROA MROOOOAW MORRRRWOOOOOW!!!"
    let author = "Salem"

    return (
      <div className="mt-[36vh]">
        <p className="italic">{quote}</p>
        <p className="text-right">- {author}</p>
      </div>
    )
  }
}