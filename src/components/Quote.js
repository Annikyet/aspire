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
      <div className="mt-[36vh] bg-neutral-400/20 p-2 px-6 backdrop-blur-sm">
        <p className="italic font-light text-sm text-neutral-50/80">{quote}</p>
        <p className="text-right">- {author}</p>
      </div>
    )
  }
}