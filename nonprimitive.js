// const user = {
//     name:"anu",
//     age:20,
//     isActive: true
// }
// console.log(user);
// console.log(typeof user);

// const numbers = [1,2,3,4,5]
// console.log(numbers);
// console.log(typeof numbers);
// function scope
function greet (){
    var x=10
    console.log(x);
    
}

// block scope

function greet(){



if (true){
    let y=20
    console.log(y);
}
}

// global scope

function greet(){
    var x=10
    console.log(x);
}
greet()