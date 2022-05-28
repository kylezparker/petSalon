//practice for friday:do unit 3 assignments, particularly toDo app, again. do petSalon again.
//what are the tools I need practice with: object literals and what can be put inside them.use of the console to test things. arrays, filled and empty.pushing things into arrays.object constructors and using them to create objects which can then be put into array elements.for loops.using getElementById to: retrieve values, display things in html, delete created things, id created things by attaching "counters", clear forms. Some HTML things: forms, labels, buttons. CSS: particularly BootStrap.



// a1-- WORKS
// let movies=[];
// let directors=[];

// function assignment1(){
// for(let i=0;i<5;i++){
//      movies[i]=prompt("enter a movie");
// }
// for(let i=0;i<5;i++){
//      directors[i]=prompt("enter a director");
// }
// for(let i=0;i<5;i++){
//     document.write(`<p>${movies[i]} ${directors[i]}</p>`);
// }
// }
// assignment1();

// a2 --WORKS
//button onclick function in html
// function receipt(){
//     let product=prompt("enter a product");
//     let qty=prompt("enter the qty");
//     let price=prompt("enter the price before tax per item");

//     const tax=.08;
//     let totalTax=tax*qty*price;
//     let total=qty*price+totalTax;

//     document.write(`${product} qty ${qty} costs ${total}`);

// }
// receipt();

// a3-- WORKS
// calculator, take 2 numbers, do basic operations, return result
// function calculator(){
//     let num1=Number(prompt("enter a number"));
//     let num2=Number(prompt("enter another"));
//     document.write(`<p>sum: ${sum(num1,num2)}</p><p>sub: ${sub(num1,num2)}</p><p>mult: ${mult(num1,num2)}</p><p>div: ${div(num1,num2)}</p>`);
// }
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mult(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }
// calculator();

// a4-- WORKS
//a1-a3 were easy. i need to practice a4 and petSalon
// todo app including practice.html. app that registers tasks and allows them to be deleted. needs form, buttons, ids for html display.
// registerTask(){

// }
// delete(){

// }
// clearForm(){

// }

// //global variables.newTask stores value in txtTask. count begins at 0 and iterates for use as identification of tasks.
// let newTask=document.getElementById("txtTask");
// let count=0;
// //count iteration attaches id to each task, which is used in deleteTask function.function displays tasks in html file, calls functions for deletion of tasks(when needed)and clearing of forms(each time a task is entered)
// function registerTask(){
//     console.log(newTask.value);
//     let tmp=`<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️</button> </li>`
//     document.getElementById("todoList").innerHTML+=tmp;
//     clearForm();
//     count++;
// }
// //delete task when trash can is clicked, called in registerTask function
// function deleteTask(x){
//     document.getElementById(x).remove();
// }
// //clear form after entering task, called in registerTask function
// function clearForm(){
//     newTask.value="";
// }
// let newTask=document.getElementById("txtTask");
// let count=0;
// function registerTask(){
//     let tmp=`<p id="${count}"> ${newTask.value} <button onclick="deleteTask(${count})">🗑️</button></p>`;
//     document.getElementById("todoList").innerHTML+=tmp;
//     clearForm();
//     count++;
// }
// function deleteTask(x){
//     document.getElementById(x).remove();
// }
// function clearForm(){
//     newTask.value="";
// }
//petSalon--WORKS
// in html: <input type="text" id="txtTask"> and <button onclick="registerTask();">, lower ul id="todoList"
//in js:start by declaring newTask=document.getElementById("txtTask") and count=0. then fn register: tmp= `<p id=count> newTask.value <button onclick=delete(count)>emoji</button></p>`. innerHTML+=tmp.clearForm.count++. then deleteTask(x):document.getElementById(x).remove(). Then clearForm():newTask.value=""

// petSalon. create salon object literal with pets empty array inside. create pets constuctor and use it to create some pets elements and push them into the array. then make a form in the html to capture . 
//salon(name,address,hours,phone,pets).
// let salon={
//     name:"The Fashion Pet",
//     address:{
//         street:"bla bla",
//         city:"whatever"
//     },
//     hours:{
//         close:"sad",
//         open:"sad"
//     },
//     phone:"555555555",
//     pets:[]
// }
// function Pet(name,age,breed){
//     this.name=name;
//     this.age=age;
//     this.breed=breed;
// }

// let amy= new Pet("amy",5,"cat");
// let lemon= new Pet("lemon",5,"cat");
// let george= new Pet("george",5,"cat");

// salon.pets.push(amy,lemon,george);

// function registerPet(){
// let petName=document.getElementById("txtName").value;
// let petAge=document.getElementById("txtAge").value;
// let petBreed=document.getElementById("txtBreed").value;
// let newPet= new Pet(petName,petAge,petBreed);
// salon.pets.push(newPet);
// clearForm();
// }

// function clearForm(){
// document.getElementById("txtName").value="";
// document.getElementById("txtAge").value="";
// document.getElementById("txtBreed").value="";
// }

// function displaySalonInfo(){
//     let tmp=`${salon.name} ${salon.address.street} ${salon.hours.close} ${salon.phone}`;
//     document.getElementById("todoList").innerHTML=tmp;
    
// }