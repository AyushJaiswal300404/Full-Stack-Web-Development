function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Enter your name" />
            <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}