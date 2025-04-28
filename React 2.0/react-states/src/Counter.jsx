import { useState, useEffect } from "react"

export default function Counter(){
    let [countx, setCountx]=useState(0);
    let [county, setCounty]=useState(0);


    let increaseCountx=()=>{
        // setCount(count+1);
        // setCount(count+1); // This will not work as expected because of closure. It will always take the initial value of count.
        setCountx((currCount) =>{
            return currCount+1;
        })
    }
    let increaseCounty=()=>{
        setCounty((currCount) =>{
            return currCount+1;
        })
    }
    useEffect(()=>{
        console.log("Count has been updated to: ", countx);
        
    }, [countx]) // This will run every time the count changes. The second argument is the dependency array. If you want to run it only once, pass an empty array.
    return(
        <div>
            <h2>Count={countx}</h2>
            <button onClick={increaseCountx}>+1</button>
            <h2>Count={county}</h2>
            <button onClick={increaseCounty}>+1</button>
        </div>
    )
}

