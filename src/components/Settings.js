import React from 'react'
import ReactDOM from 'react-dom/client'

// TODO Settings button should open settings pane
export class SettingsBtn extends React.Component {
  render() {
    return (
      <div className="hover:bg-slate-300 justify-self-end p-2 text-2xl text-neutral-100/80 hover:text-neutral-900/80">
        <i className="mdi mdi-menu"></i>
      </div>
    )
  }
}

// TODO actually put stuff here
export class SettingsPane extends React.Component {
  render() {
    return (
      <div className="hidden md:block md:w-[25vw] bg-blue-300">settingsPane</div>
    )
  }
}