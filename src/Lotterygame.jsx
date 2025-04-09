import { useState } from "react";
import { genTicket } from "./helper";
import "./lottery.css";

export default function LotteryGame(){
    const [ticket, setTicket] = useState(genTicket(3));
    return (
        <>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </>
    );
}