let btn = document.querySelector('button');
btn.addEventListener('dblclick', function() {
    console.log('Button double clicked');
});

let input = document.querySelector('input');
// input.addEventListener("keydown", function(event) {
//     console.log("key =",event.key);
//     console.log("code =",event.code);
//     console.log('Key down');

// });
// input.addEventListener("keyup", function() {
//     console.log('Key up');
// });
//keyboard event has its code and key property
//code property is the physical key on the keyboard
//key property is the character that is pressed


input.addEventListener("keydown", function(event) {
    console.log("code =",event.code);
    if(event.code == "ArrowUp"){
        console.log("Character moves forward");
    }
    else if(event.code == "ArrowDown"){
        console.log("Character moves backward");
    }
    else if(event.code == "ArrowLeft"){
        console.log("Character moves left");
    }
    else if(event.code == "ArrowRight"){
        console.log("Character moves right");
    }
    else{
        console.log("Invalid key pressed");
    }
});
    