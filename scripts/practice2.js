//practice making object literals, object constructors, arrays, and functions relevant to a pet salon type project


//arrays can be created inside object literals, so can functions
//object literals like things can be created inside object literals(items with properties within items with properties


//let products, funtion Product(x,y,z){}, let product1=new Product(x,y,z)

// console.log(products);
// console.log(product1,product2,product3);
// products.push(product1,product2,product3);
// //products=[product1,product2,product3];
// console.log(products[2].name);
let pets=[];

function Pet(name,age,species){
    this.name=name;
    this.age=age;
    this.species=species;
}

let pet1=new Pet("moby",150,"dolphin");
let pet2=new Pet("billy",2500,"satyr");
let pet3=new Pet("april",1500,"faun");

pets.push(pet1,pet2,pet3);

// console.log(pets);
let pet={
    name:"merle",
    age:3000,
    species:"dryad"
}

// pets.push(pet);
// function displayNames(){
//     for(let i=0;i<products.length;i++){
//         console.log(products[i].description);
//     }
// }
// displayNames();

function displayNames(){
    for(let i=0;i<pets.length;i++){
        console.log(pets[i]);
    }
}
displayNames();




//practice for friday:do unit 3 assignments, particularly toDo app, again. do petSalon again.
//what are the tools I need practice with: object literals and what can be put inside them.use of the console to test things. arrays, filled and empty.pushing things into arrays.object constructors and using them to create objects which can then be put into array elements.for loops.using getElementById to: retrieve values, display things in html, delete created things, id created things by attaching "counters", clear forms. Some HTML things: forms, labels, buttons. CSS: particularly BootStrap.



// a1
let movies=[];
let directors=[];

function assignment1{
for(let i=0;i<5;i++){
    let movies[i]=prompt("enter a movie");
}
for(let i=0;i<5;i++){
    let directors[i]=prompt("enter a director");
}
for(let i=0;i<5;i++){
    document.write(`<p>${movies[i]} ${directors[i]}</p>`);
}
}
assignment1();