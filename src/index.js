import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


class Game extends React.Component {
  render() {
    return (
      <header className="grid grid-cols-4">
        <section className="col-1 bg-red-400">todoBar</section>
        <section className="col-start-4 col-1 flex">
          <section className="bg-green-400 grow">weatherBar</section>
          <section className="bg-blue-400 justify-self-end">settingsBtn</section>
        </section>
      </header>

      
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

