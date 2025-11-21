import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import TicketNum from './TicketNum.jsx'
import Ticket from './Ticket.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Lottery n={3} winningsum={15}/>
     
        {/* <Lottery /> */}
      {/* <TodoList />
        <LudoBoard /> */}
        </div>
    </>
  );
}

export default App
