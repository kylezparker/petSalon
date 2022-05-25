//object literal
let salon={
    name:"the fashion pet",
    address:{
        street:"palomar",
        zip:"223456",
        city:"san diego",
        number:"265-k",
    },
    hours:{
        open:"9am",
        close:"5pm"
    },
    phone:"555-555-5555",
    pets:[
        {
            name:"scooby",
            age:50,
            gender:"male",
            breed:"dane",
            service:"grooming",
            owner:"shaggy",
            phone:"8888888888"

    },
    {
        name:"lemon",
        age:5,
        gender:"female",
        breed:"cat",
        service:"grooming",
        owner:"kyle",
        phone:"8888888888"

    },
    {
        name:"amy",
        age:5,
        gender:"female",
        breed:"cat",
        service:"grooming",
        owner:"kyle",
        phone:"8888888888"

    }
    ]
}

console.log(salon.pets[0],salon.pets[1]);
//call function to certain location in html
//lookup document.getElementById.innerHTML
console.log(salon);
function displaySalonInfo(){
    //document.getElementById("salon").innerHTML=salon;
    let tmp=`<p>welcome to the ${salon.name}</p><p>located at ${salon.address.street} ${salon.address.zip} ${salon.address.city} ${salon.address.number}</p><p>hours ${salon.hours.open}-${salon.hours.close}</p><p>phone number ${salon.phone}</p>`;
    document.getElementById("info").innerHTML=tmp;

}
displaySalonInfo();

function displayNames(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
}
displayNames();


