import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


class Main extends React.Component {
  render() {
    return (
      <main className="flex flex-col">
        <div className="flex justify-between">
          <div className="min-w-[25vw] bg-red-400">todos</div>
          <div className="min-w-[25vw] flex">
            <div className="bg-green-400 grow">weather</div>
            <div className="bg-blue-400 justify-self-end">[]</div>
          </div>
        </div>
        
        <div className="flex">
          <div className="hidden md:w-[25vw] bg-purple-500">
            hewwo
          </div>
        </div>
      </main>


    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);