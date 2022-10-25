import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import components
import { TodoBar, TodoPane } from './components/Todo.js'
import { WeatherBar, WeatherPane } from './components/Weather.js'


class Main extends React.Component {
  render() {
    return (
      <main className="flex flex-col h-[100vh]">
        <div className="flex justify-between">
          <TodoBar />
          <div className="min-w-[25vw] flex">
            <WeatherBar />
            <div className="bg-blue-400 justify-self-end">[]</div>
          </div>
        </div>
        
        <div className="grow h-100 flex">
          <TodoPane />
          <div className="grow">
            <div className="mt-[24vh] bg-purple-500">clock</div>
            <div className="mt-[36vh] bg-orange-500">quote</div>
          </div>
          <WeatherPane />
        </div>

        <p className="text-right bg-yellow-500">credits</p>
      </main>


    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);