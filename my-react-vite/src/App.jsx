import { useState } from 'react'
import mythraSword from './assets/mythra.png'
import pyraSword from './assets/pyra.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={pyraSword} className="logo" alt="Pyra Sword" />
        </a>
        <a target="_blank">
          <img src={mythraSword} className="logo react" alt="Mythra Sword" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
