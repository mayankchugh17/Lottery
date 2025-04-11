import LotteryGame from './Lotterygame'
import Ticket from './Ticket.jsx'
import './App.css'

function App() {
  return (
   <>
      <Ticket ticket={[7,8,6]} />
      <br />
      <Ticket ticket={[10,2,13,5]} />

   </>
  )
}

export default App
