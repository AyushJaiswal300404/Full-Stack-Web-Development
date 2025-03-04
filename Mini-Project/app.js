let btn = document.querySelector("button");
let ul= document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item =document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del");

    item.appendChild(delBtn);
    ul.appendChild(item); 
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         this.parentElement.remove();
//     });
// }

//does not work because the delBtns are not present when the code is run
//so we need to use event delegation

ul.addEventListener("click", function(event){
    if(event.target.tagName == "BUTTON"){
        event.target.parentElement.remove();
        console.log("Deleted")
    }
});