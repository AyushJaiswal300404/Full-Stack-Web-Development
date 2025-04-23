// import "./App.css"
import Title from "./Title.jsx"
import "./Button.css"
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx"

// function App() {
//   let name="Ayush";
//   return (
//   <>
//     <Title/>
//     <button className="Button">Hey</button>
//     <p>Hi, {name}</p>
//   </>
//   )
// }

function App(){
    return(
        <>
            <h1>Products</h1>
            <ProductTab/>
            <MsgBox userName="Ayush" textColor="red"/>
            <MsgBox userName="John" textColor="blue"/>
            <MsgBox userName="Doe" textColor="green"/>
        </>
    )
}

export default App;
