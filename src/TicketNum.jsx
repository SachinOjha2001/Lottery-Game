import './TicketNum.css'

export  default function TicketNum({ number }) { //props: { number: number }}
  return (

      <span className="TicketNum">{number}</span>

  );
}