import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


class Game extends React.Component {
  render() {
    return (
      <main className="grid md:grid-cols-3">
        <section id="todoism" className="background-purple-300">todos</section>
        <div className="flex flex-col">
          <section id="clock" className="background-red-300">clock</section>
          <section id="quote" className="background-blue-300">quote</section>
        </div>
        <section id="weather" className="background-green-300">weather</section>
      </main>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

