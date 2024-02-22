const counter=(function(){
    let counter = 0
    function Increment(){
        counter++;
        console.log(counter);
    } 
    function Decrement(){
        counter--;
        console.log(counter);
    }
    return{
        Increment,
        Decrement

    }
})()

counter.Increment();
counter.Increment();
counter.Increment();
counter.Increment();
counter.Decrement();
counter.Decrement();
counter.Decrement();
counter.Decrement();