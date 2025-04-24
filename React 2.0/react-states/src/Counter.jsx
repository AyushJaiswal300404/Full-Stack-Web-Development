import { useState } from "react"

export default function Counter(){
    let [count, setCount]=useState(0);

    let increaseCount=()=>{
        // setCount(count+1);
        // setCount(count+1); // This will not work as expected because of closure. It will always take the initial value of count.
        setCount((currCount) =>{
            return currCount+1;
        })
        setCount((currCount) =>{
            return currCount+1;
        })
    }
    return(
        <div>
            <h2>Count={count}</h2>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

