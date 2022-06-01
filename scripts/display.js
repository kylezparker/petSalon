// function displayCards(){
//     let petDiv=$("#pets");
//     petDiv.html("")
//     //travel the array
//     let tmp="";
//     for(let i=0;i<salon.pets.length;i++){
//         let pet=salon.pets[i];
//         tmp+=`
//         <div class="pet">
//         <h5>Name: ${pet.name} 🐾</h5>
//         <p>Age: ${pet.age}</p>
//         </div>
//         `;
//         // add rest of things alone
//         // console.log(tmp);
       
//     }
//     // $("#pets").append(tmp);
//     petDiv.append(tmp);

// }
// // function displayTable(){
// // tmp="<tr>"
// // petDiv.append(tmp);

// // }
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
    // $("#pets").append(tmp);
    petDiv.append(tmp);
    petDiv.append("</tbody>");
}
// function displa

// // {/* <table class="table table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// // </table> */}




// {/* <tr>
// <td>${pet.name}</td>
// <td>${pet.age}</td>
// <td>${pet.gender}</td>
// <td>${pet.breed}</td>
// <td>${pet.service}</td>
// <td>${pet.owner}</td>
// <td>${pet.phone}</td>
// </tr>`; */}



// {/* <th scope="row">${pet.name}</th> */}