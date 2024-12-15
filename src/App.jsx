import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Center from './components/center'
import Footer from './components/Footer';
import background from './assets/background.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='header'>
  <Nav/>
  {/* <img src={background} alt="" /> */}
   </div>
   
   <div className='center'>

    <div className="item1"><Center topic='react js' fees='10k' value='Pay now' imgpath={background}/></div>

    <div className="item2"><Center topic='angular js'
    fees='20k' value='learn free' imgpath={background}/></div>

    <div className="item3"><Center topic='next js'
    fees='30k' value='Pay us' imgpath={background}/></div>

   </div> 
<div className="footer" style={{marginTop:'20px'}}>
  <Footer/>
</div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
      </p> */}
    </>
  )
}

export default App
