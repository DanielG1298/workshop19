//state 
let numberBank = [];
let odd = [];
let even = [];

function addNumber(n){
   numberBank.push(n);
   renderBank();
   
} 
 //form to take userinput 
 function InputForm(){
    const $form = document.createElement("form")
    $form.innerHTML=`
    <label>
    add number to bank 
    <input name= "add number" type="number" min="1"/>
    </label>
    <button type = "submit", id="add">Add</button>
    <button type = "button", id=sort1>sort 1</button>
    <button = "button", id="sortAll">sort all</button>
    <div>
      <h3>Number Bank:</h3>
      <div id="number-bank"></div>
      <h3>Odds:</h3>
      <div id="odds"></div>
      <h3>Evens:</h3>
      <div id="evens"></div>
    </div>
    `;
    $form.addEventListener("submit",(event) => {
        event.preventDefault();
        const data = new FormData($form);
        const inputNumber = data.get("add number");
        addNumber(Number(inputNumber));
        ;
$form.reset()

 });$form.querySelector("#sort1").addEventListener("click", sortOne);
       $form.querySelector("#sortAll").addEventListener("click", sortAll);
    return $form
 }
 //function for sort1
 function sortOne(){
if (numberBank.length <= 0) return;
const num = numberBank.shift();
if (num % 2 === 0){
   even.push(num)}
   else{ odd.push(num)};
   renderBank();
}
//sortall function
function sortAll(){
   while (numberBank.length > 0){
      const num = numberBank.shift();
      if (num % 2 === 0){
   even.push(num)}
   else{ odd.push(num)};
   
}renderBank()
}

 
 //render to update display
 function renderBank(){
 document.querySelector("#number-bank").innerText = numberBank.join(",");
 document.querySelector("#odds").innerText = odd.join(",");
 document.querySelector("#evens").innerText = even.join(",");  
 }

 //main render for app
 function render(){
    const $app = document.querySelector("#app");
    $app.innerHTML =`
    <h1>Odds and evens</h1>
    <main>
    <form></form>
    
    </main>`;
 $app.querySelector("form").replaceWith(InputForm());
}render()


