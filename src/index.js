import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import components
import { TodoBar, TodoPane } from './components/Todo.js'
import { WeatherBar, WeatherPane } from './components/Weather.js'
import { SettingsBtn, SettingsPane } from './components/Settings.js'
import { Clock } from './components/Clock.js'
import { Quote } from './components/Quote.js'
import { Credits } from './components/Credits.js'

class EmptyPane extends React.Component {
  render() {
    return (
      <div className="hidden md:block md:w-[25vw]"></div>
    )
  }
}


class Main extends React.Component {
  render() {
    return (
      <main className="flex flex-col h-[100vh]">
        <div className="flex justify-between">
          <TodoBar />
          <div className="min-w-[25vw] flex">
            <WeatherBar />
            <SettingsBtn />
          </div>
        </div>
        
        <div className="grow h-100 flex">
          <EmptyPane />
          <div className="grow">
            <Clock />
            <Quote />
          </div>
          <EmptyPane />
        </div>

        <Credits />
      </main>


    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);