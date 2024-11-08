import { useState } from "react";
import { genTickets, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}) {
  const [ticket, setTicket] = useState(genTickets(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket=()=>{
    setTicket(genTickets(n))
  }

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations, you won"}</h3>
    </div>
  );
}
