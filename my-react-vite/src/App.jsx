import { useState } from 'react'
import mythraSword from './assets/mythra.png'
import pyraSword from './assets/pyra.png'
import './App.css'

function clamp(n) {
  return n < 0 ? 0 : n;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a target="_blank">
          <img src={pyraSword} className="sword" alt="Pyra Sword" />
        </a>
        <a target="_blank">
          <img src={mythraSword} className="sword mythra" alt="Mythra Sword" />
        </a>
      </div>
      <h1>Pyra + Mythra</h1>
      <div className="card">
        <button onClick={() => setCount(c => clamp(c + 1))}>
          +
        </button>
        <button onClick={() => setCount(c => clamp(c - 1))}>
          -
        </button>
        <h2>
          {count}
        </h2>
      </div>
    </>
  )
}

export default App
