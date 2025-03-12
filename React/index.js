// const incrementBtn=document.getElementById("increment-btn");
// // console.log(incrementBtn);
// const countDisplay = document.getElementById("count-display");
// // console.log(countDisplay);
// let count=0; //state
// incrementBtn.addEventListener("click",()=>{
//     count++;
//     countDisplay.innerHTML=count;
// });


const reactContentRoot = document.getElementById("root");

// const myFirstElement = React.createElement("li", null, React.createElement("h1", null, "Hello World"));

// if (reactContentRoot) {
//     const root = ReactDOM.createRoot(reactContentRoot);
//     // root.render("Hello World");
//     root.render(myFirstElement);
// } else {
//     console.error("Target container is not a DOM element.");
// }

// const myItem = "Harry"

// const myJSXElement = (
//     <ul>
//         <li>
//             <h1>Hello World</h1>
//         </li>
//         <li>{myItem.toUpperCase()}</li>
//     </ul>
// )

const App = ()=>{
    const myItem = "Harry"
    return (
        <ul>
            <li>
                <h1>Hello World</h1>
            </li>
            <li>{myItem.toUpperCase()}</li>
        </ul>
    )
}

const root = ReactDOM.createRoot(reactContentRoot);
root.render(<App />);
