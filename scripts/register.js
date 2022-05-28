//object literal
let salon={
    name:"the fashion pet",
    address:{
        street:"palomar",
        zip:"223456",
        city:"san diego",
        number:"265-k"
    },
    hours:{
        open:"9am",
        close:"5pm"
    },
    phone:"555-555-5555",
    // pets:[
    //     {
    //         name:"scooby",
    //         age:50,
    //         gender:"male",
    //         breed:"dane",
    //         service:"grooming",
    //         owner:"shaggy",
    //         phone:"8888888888"

    // },
    // {
    //     name:"lemon",
    //     age:5,
    //     gender:"female",
    //     breed:"cat",
    //     service:"grooming",
    //     owner:"kyle",
    //     phone:"8888888888"

    // },
    // {
    //     name:"amy",
    //     age:5,
    //     gender:"female",
    //     breed:"cat",
    //     service:"grooming",
    //     owner:"kyle",
    //     phone:"8888888888"

    // }
    // ]
    pets:[]
}


function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner; //
    this.phone=phone; //
}

let amy=new Pet('amy', 5, "female","cat","haircut","kyle",55555555555);
let lemon=new Pet('lemon', 5, "female","cat","haircut","kyle",55555555555);
let george=new Pet('george', 5, "male","cat","haircut","kyle",55555555555);

function register(){
console.log("Registering");
//get the info from the inputs ****getElementById  .value
let petName=document.getElementById("txtName").value;
let petAge=document.getElementById("txtAge").value;
let petGender=document.getElementById("txtGender").value;
let petBreed=document.getElementById("txtBreed").value;
let petService=document.getElementById("selService").value;
let petOwner=document.getElementById("txtOwner").value;
let petPhone=document.getElementById("txtPhone").value;

//create the object using the constructor
let newPet= new Pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
//push the object in on the array
salon.pets.push(newPet);
//display it on the console
console.log(newPet);
console.log(salon.pets);
clearForm();
}



//console.log(salon.pets[0],salon.pets[1]);

//call function to certain location in html
//lookup document.getElementById.innerHTML
console.log(salon);
function displaySalonInfo(){
    //document.getElementById("salon").innerHTML=salon;
    let tmp=`<p>welcome to the ${salon.name}</p><p>located at ${salon.address.street} ${salon.address.zip} ${salon.address.city} ${salon.address.number}</p><p>hours ${salon.hours.open}-${salon.hours.close}</p><p>phone number ${salon.phone}</p>`;
    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");

}

function clearForm(){
document.getElementById("txtName").value="";
document.getElementById("txtAge").value="";
document.getElementById("txtGender").value="";
document.getElementById("txtBreed").value="";
document.getElementById("selService").value="";
document.getElementById("txtOwner").value="";
document.getElementById("txtPhone").value="";
}




// function displayNames(){
//     for(let i=0;i<salon.pets.length;i++){
//         console.log(salon.pets[i].name);
//     }
// }
// displayNames();

// alert(`${salon.pets.length}`);


function init(){
//hook events
//displaySalonInfo();
console.log(amy,lemon);
salon.pets.push(amy,lemon);
}

window.onload=init;