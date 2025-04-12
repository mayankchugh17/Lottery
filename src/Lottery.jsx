import { useState } from "react";
import { genTicket,sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function LotteryGame({ n = 3, winningSum = 10}){
    const [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () =>{
        setTicket(genTicket(n))
    }
        return (
        <>
            <h1>Lottery Game!</h1>
           <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </>
    );
}