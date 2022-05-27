let student= {
    //attr or properties
    name:"daniel",
    age:99,
    isActive:true,
    //function
    sayHi:function(){
        return "hello";
    },
    hobbies:["football", "listen music", "play zelda"],
    address:{
        street:"palomar",
        zip:"22145",
        city:"san diego",
        country:"usa"
    }
}
console.log(student.hobbies[1]);
//could do document.write with formatting <p>
console.log(student.address.country,student.address.street);


let products=[];
// let product1={
//     name:"laptop",
//     description:"hp laptop 14 in core i7",
//     price:200
// }
// let product2={
//     name:"dvd",
//     description:"avengers:infinity war",
//     price:20
// }
// let product3={
//     name:"bluray",
//     description:"avengers:endgame special edition with deleted scenes and infinity gauntlet",
//     price:500
// }


//constructor vs object
// local vars n d p.... this?
function Product(n,d,p){
    this.name=n;
    this.description=d;
    this.price=p;
}

//new?
let product1=new Product('speaker', 'sont wireless', 20.50);
let product2=new Product('laptop', 'hp', 100.00);
let product3=new Product('laptop', 'mac', 1000.00);
let product4=new Product('laptop', 'asus', 900.00);

console.log(products);
console.log(product1,product2,product3);
products.push(product1,product2,product3);
//products=[product1,product2,product3];
console.log(products[2].name);

//display pet names in register js
function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}
displayNames();