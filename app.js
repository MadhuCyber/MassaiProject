const id = document.getElementById("about");
const className = document.getElementsByClassName("project-container");
const grids = document.getElementsByClassName("grids");
const a = document.querySelector('#about');
const b = document.querySelector('.grids');
const c = document.querySelectorAll('.grids');
const header = document.querySelector('.project_header h1');
const footerBtn = document.querySelector('#contact .btn');
const btn = document.querySelectorAll('#items .cards .btn');

const name = document.querySelector('#fullName');

name.addEventListener("input",()=>{
    console.log(name.value);
});



// c.forEach(element => {
//     console.log(element);
// });  
// c.forEach(function(element){
//     console.log(element);
// });
header.textContent ="Mohan's Bakery";
footerBtn.textContent ="Submit The Form";
btn.forEach(element =>{
element.textContent = "Click to Add to Cart";
element.addEventListener("click",()=>{
    console.log( "Added to Cart");
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({behavior:"smooth"});
});
});

const submitBtn = document.querySelector("#submit");
//calls only when btn is clicked
submitBtn.addEventListener("click",submit);

function submit(){
    console.log("Form Submitted!");
}

const goalBtn = document.querySelector("#goal");
//calls only at page loading
goalBtn.addEventListener("click", goal());

function goal(){
    console.log("Mummmyyy!");
}
// console.log(id);
// console.log(className);
// console.log(grids);
//  console.log(a);
//  console.log(b);
