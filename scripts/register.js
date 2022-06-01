//object literal with pet array
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
    pets:[]
}

//pet constructor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner; 
    this.phone=phone; 
}

//pets created with constructor
let amy=new Pet('amy', 5, "female","cat","grooming","kyle","(555) 555-5555");
let lemon=new Pet('lemon', 5, "female","cat","grooming","kyle","(555) 555-5555");
let george=new Pet('george', 5, "male","cat","grooming","kyle","(555) 555-5555");

//validation function
function isValid(aPet){
    let valid=true;
    if(aPet.name=="" || aPet.service=="" || aPet.phone==""){
        valid=false;
    }
    return valid;
}

//registration function. takes values from html input fields, creates pet with construtor; then, if validated, pushes pet into array and displays it on table in html.
//but if user hasn't filled in required fields, then alert. function finishes by clearing registration form in html
function register(){
console.log("Registering");
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
//push the object into array
salon.pets.push(newPet);
//display all pets in console 
console.log(salon.pets);
displayTable();
clearForm();
}
else{
    alert("please fill all required fields");
}
}

// display salon info function, never called
function displaySalonInfo(){
    let tmp=`<p>welcome to the ${salon.name}</p><p>located at ${salon.address.street} ${salon.address.zip} ${salon.address.city} ${salon.address.number}</p><p>hours ${salon.hours.open}-${salon.hours.close}</p><p>phone number ${salon.phone}</p>`;
    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");
}

//clear form function
function clearForm(){
document.getElementById("txtName").value="";
document.getElementById("txtAge").value="";
document.getElementById("txtGender").value="";
document.getElementById("txtBreed").value="";
document.getElementById("selService").value="";
document.getElementById("txtOwner").value="";
document.getElementById("txtPhone").value="";
}

//init function, displays table with pets I created
function init(){
console.log(amy,lemon,george);
salon.pets.push(amy,lemon,george);
displayTable();
}

window.onload=init;
