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
          <img src={pyraSword} className="sword" alt="Pyra Sword" />
        </a>
        <a target="_blank">
          <img src={mythraSword} className="sword mythra" alt="Mythra Sword" />
        </a>
      </div>
      <h1>Pyra + Mythra</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
