//Using Axios to make a GET request to the API
// Axios is a promise based library to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.

let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let fact = await getCatFact();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getCatFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        return "Something went wrong";
    }   
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", async() => {
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result2");
    img.setAttribute("src", link);

});

async function getImage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }
    catch(err){
        return "Something went wrong";
    }   
}

