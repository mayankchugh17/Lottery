import TicketNum from "./TicketNum";
import './Ticket.css'
export default function Ticket({ticket})
{
    return (
        <>
            {
                ticket.map((num, idx)=>(
                    <TicketNum num={num} key={idx}/>
                ))
            }
        </>
    );
}