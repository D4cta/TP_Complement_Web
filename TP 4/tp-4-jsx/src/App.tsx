import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paragraph from './components/Paragraph'
import Check from './components/Check'

function App() {
  const [count, setCount] = useState(0)
  const myString = "J'aime les maths";

  const monBoolean = true;
  const monTab: Array<number> = [1, 5, -2, 8, 9];
  const test = monTab.map((x) => <p>Il fait {x}° degré{x !== 0 && x !== 1 && 's'} dehors</p>)
  const mesInvites = [
    {
      age: 50,
      nom: "Gérard"
    },
    {
      age: 60,
      nom: "Estelle"
    },
    {
      age: 17,
      nom: "Laurie"
    },
  ];

  const testt = mesInvites.map((y) => { return <p>J'ai eu un invité qui s'appelle {y.nom} et qui a {y.age} ans</p> })


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>La biograpghie du véritable HENRY CASTAFOLTE</h1>
      <div className="card">
        <p>{myString}</p>
        <p>{test}</p>
        <p>{testt}</p>
        <Paragraph >
          J'aime les maths
        </Paragraph>
        <Check checked={true} />
        <div>
          {monBoolean && "affiché que si true"}
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Comptage {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
