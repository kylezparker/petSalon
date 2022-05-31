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

let amy=new Pet('amy', 5, "female","cat","grooming","kyle",55555555555);
let lemon=new Pet('lemon', 5, "female","cat","grooming","kyle",55555555555);
let george=new Pet('george', 5, "male","cat","grooming","kyle",55555555555);



function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service=="" || aPet.phone==""){
        //if we arrive here, pet is not valid
        valid=false;
    }

    return valid;
}

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
if(isValid(newPet)==true){
//push the object in on the array
salon.pets.push(newPet);
//display it on the console
console.log(newPet);
console.log(salon.pets);
displayTable();
clearForm();
}
else{
    alert("please fill all fields");
}
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
//or petName.value="";
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
console.log(amy,lemon,george);
salon.pets.push(amy,lemon,george);
displayTable();
}

window.onload=init;
//getElementByTagName and getElementByClassName
//console.log(inputs);
//let inputs=document.getElementsByTagName('input');
//document.getElementById('').style.display.'none' or 'block'; or ById().remove()

//function clear(){
//     let inputs=document.getElementsByTagName('input');
//let inputs=document.querySelector("input");
//     for(let i=0;i<inputs.length;i++){
//         inputs[i].value="";
//     }

// document.getElementById("selService").value="default"
// }

//document.querySelector('input'); --returns first example OR querySelectorAll --gives all

// function clearForm(){
//     $("input").val("");
// }