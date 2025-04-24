function printHello(event){
    console.log("Hello");
}

function handleHover(){
    console.log("Hovered");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={handleHover}> loerem ipsum </p>
        </div>
    )
}