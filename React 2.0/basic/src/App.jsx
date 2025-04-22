import "./App.css"
import Title from "./Title.jsx"
import "./Button.css"


function App() {
  let name="Ayush";
  return (
  <>
    <Title/>
    <button className="Button">Hey</button>
    <p>Hi, {name}</p>
  </>
  )
}

export default App
