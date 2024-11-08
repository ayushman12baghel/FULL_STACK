import { useState } from "react";
import "./App.css";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./ToDO.jsx";
import Lottery from "./Lottery.jsx"
import Ticket from "./Ticket.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Lottery n={3} winningSum={15}/>
    </>
  );
}

export default App;
