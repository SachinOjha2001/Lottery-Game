import { getTicket ,sum} from './helper';
import './lottery.css';
import {useState} from 'react';
import Ticket from './Ticket';
export default function lottery({n=3,winningsum=15}) {
  let [ticket ,setTicket] = useState(getTicket(n));
  let isWinningTicket = sum(ticket) === winningsum;
  let byticket = () => {
    setTicket(getTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
         <Ticket ticket={ticket} />      
       <button onClick={byticket}>Get New Ticket</button>
       <h3>{isWinningTicket && "Congratulations! You Win!!"}</h3>
    </div>
  );
}