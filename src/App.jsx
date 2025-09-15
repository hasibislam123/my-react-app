
import './App.css'
import Counter  from './counter'; 
import BatsMan from './Batsman'

function App() {
  
  function handelclick(){
    alert ('I am clicked.')
  }

  const handelclick3 =() => {
    alert('Click2')
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <BatsMan></BatsMan>
      <Counter></Counter>
      <button onClick={handelclick}>Click Me</button>
      <button onClick={handelclick3}>Click Me 2</button>
      {/* <button>Click Me</button> */}
    </>
  )
}

export default App
