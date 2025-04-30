import React, { useEffect, useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({ value: "" });
    const URL = "https://api.chucknorris.io/jokes/random";

    const getNewJoke = async () => {
        try {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({ value: jsonResponse.value }); 
        } catch (error) {
            console.error("Failed to fetch joke:", error);
        }
    }

    return(
        <div>
            <h1>Chuck Norris Jokes</h1>
            <h2>{joke.value}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}

