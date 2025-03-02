let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    // console.log('Form submitted');
    event.preventDefault();

    // let inp = document.querySelector('input');
    // console.log(inp.value);

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');
    // let user= this.elements[0];
    // let pass= this.elements[1];
    // alert(`Username: ${user.value} Password: ${pass.value}`);

});

let user =document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("change event ");
    console.log("final value =", this.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value =", this.value);
});


