import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'

function App() { 
  return (
    <>
      <h1>Lottery Game</h1>
      <Lottery n={3} winningSum={10}/><h1>Lottery Game</h1>
      <Lottery n={5} winningSum={98}/>
    </>
  )
}

export default App
