//function call using call apply bind method
function greet(name){
    //console.log(`Hello, ${name}! I m ${this.name}`); 
}

const person = {name:'John'}

greet.call(person,'Alice')


function greetApplyMethod(name){
    //console.log(`Hello, ${name}! I m ${this.name}`)
} 
const person1 = {name:'Prabu'}

greetApplyMethod.apply(person1,['Alice'])

function greetBindMethod(name){
  //  console.log(`Hello, ${name}! this is ${this.name}`)
}

const greetmethod = greetBindMethod.bind(person1)

greetmethod('Alice')

//Arrow function 
const commonvalue = 5;
const multiply = (number) => number * 5;
//console.log('Multipled with 22X5 = ',multiply(22));


//arrow function with lexical scope

const obj = {
    name: "prabu",
    greet: function() {
     setTimeout(function(){
        console.log(`My name is ${this.name}`);
     },2000)
     setTimeout(()=>{
        console.log(`my name is ${this.name}`)

     },20000)
    }
  };
  
  obj.greet();
  
