import Lottery from './Lottery.jsx'
import Ticket from './Ticket.jsx'

import './App.css'

function App() {
  
  let winningCondition = (ticket) =>{
    return ticket.every((num) => {num === ticket[0]});      //All 3 TicketNumbers should be same to get win.
  };

  return (
   <>
     <Lottery n={3} winningCondition={winningCondition} />
   </>
  )
}

export default App
