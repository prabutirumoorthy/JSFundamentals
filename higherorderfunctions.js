const numbers = [12,23,14,29,90]
const multipliedNums = numbers.map(x=>{
return x * 2
});

multipliedNums.forEach(x=> console.log("Transformed items :", x));

const filteredNums = numbers.filter(x=>{
    return x != 12 || x != 29
    });
filteredNums.forEach(y=>console.log("filtered items :", y));

const fruits = ["apple","orange","banana","Jackfruit","guava"]

const sortedFruits= fruits.sort((x,y)=>x.localeCompare(y))

sortedFruits.forEach(x=>
    console.log("Sorted fruits", x)
    )
