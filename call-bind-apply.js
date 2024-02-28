function sumAll(a,b,c,d,e){
    console.log(`${this.name} scored marks subjects and it marks english: ${a}, tamil: ${b},maths: ${c},science: ${d},social science ${e}`)
    console.log(`${this.name} scorde totally: ${a+b+c+d+e}` )
}

console.log(sumAll.bind)
console.log(sumAll.call)
console.log(sumAll.apply)
const obj={name:'Prabu'}
const obj1={name:'Ram'}
const obj2={name:'Raj'}
const obj3={name:'Ravi'}
const returnfunc= sumAll.bind(obj)
returnfunc(45,34,46,56,56);
returnfunc(55,56,56,56,67);

sumAll.call(obj1,90,98,46,54,54)