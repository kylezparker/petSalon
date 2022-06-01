// display function. uses bootstrap with some of my own modifications to the css and html. before for loop, add heading of table to html.
function displayTable(){
    let petDiv=$("#pets");
    petDiv.html(`<thead class="center2"><tr><th scope="col">Name</th><th scope="col">Age</th><th scope="col">Gender</th><th scope="col">Breed</th><th scope="col">Service</th><th scope="col">Owner</th><th scope="col">Phone</th></tr></thead><tbody>`);
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        tmp+=`<tr>
            <th class="center" scope="row">${pet.name}</th>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            </tr>`
        }
    petDiv.append(tmp);
    //append end tag of <tbody> to html when pet information has fully populated table
    petDiv.append("</tbody>");
}
