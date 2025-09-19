//state 
let numberBank = [];
let odd = [];
let even = [];

function addNumber(n){
   numberBank.push(n);
   
} 
 //form to take userinput 
 function InputForm(){
    const $form = document.createElement("form")
    $form.innerHTML=`
    <label>
    add number to bank 
    <input name= "add number" type="number" min="1"/>
    </label>
    <button>Add</button>
    <button>sort 1</button>
    <button>sort all</button>
    <label> Number Bank
    <input name = "Number bank" type  = "number" />
    <label>odds
    <input name = "odds" type = "number"/>
    <label>even 
    <input name = "even" type = "number"/>
    `;
    $form.addEventListener("submit",(event) => {
        event.preventDefault();
        const data = new FormData($form);
        const numberBank = data.get("add number");
        addNumber(Number(numberBank));
    });
    return $form
 }function render(){
    const $app = document.querySelector("#app");
    $app.innerHTML =`
    <h1>Odds and evens</h1>
    <main>
    <form></form>
    
    </main>`;
 $app.querySelector("form").replaceWith(InputForm());
}render()


