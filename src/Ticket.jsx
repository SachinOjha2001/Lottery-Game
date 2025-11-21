import TicketNum from './TicketNum.jsx';
 import './Ticket.css'

export default function Ticket({ticket}) {
    return (
      <div className="Ticket">
        <p >Ticket Numbers:</p>
        {ticket.map((num, index) => (  
            <TicketNum number={num} key={index} />
        ))}
      </div>
    );
 }