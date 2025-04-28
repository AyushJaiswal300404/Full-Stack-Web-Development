import { useState } from 'react';
import TicketNum from './TicketNum';

function Lottery({ n, winningSum }) {
    const [ticket, setTicket] = useState(new Array(n).fill(0));
    
    const generateTicket = () => {
        setTicket(ticket.map(() => Math.floor(Math.random() * 10)));
    }

    const sum = ticket.reduce((sum, curr) => sum + curr, 0);
    const isWinning = sum === winningSum;

    return (
        <div>
            <div className="ticket">
                {ticket.map((num, idx) => (
                    <TicketNum key={idx} num={num} />
                ))}
            </div>
            <button onClick={generateTicket}>Generate</button>
            {isWinning && <h2>Congratulations! You Won!</h2>}
        </div>
    );
}

export default Lottery;

