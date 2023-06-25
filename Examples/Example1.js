const Example1 = () => {
    console.log(1);
    setTimeout(() => {  console.log(2)  });

    Promise.resolve().then(()=> console.log(3));
    Promise.resolve().then(()=> setTimeout(() => console.log(4)));
    Promise.resolve().then(()=> console.log(5));

    setTimeout(()=> console.log(6));
    console.log(7)
}

export default Example1;

/* 
    OUTPUT
    1  7  3  5  2  6  4

    REASON:    
    Console.log statements would immediately executed.
    Promise statements would queue in Microtask Queue.
    setTimeout statements would enqueue in Callback Queue/Macrotask Queue.
    Promise -> setTimeout would enqueue in Callback Queue in last. As this setTimeout is executed at last.
*/