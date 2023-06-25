const Example2 = () => {
    const promise1 = Promise.resolve();
    const promise2 = Promise.resolve();

    promise1
    .then(()=>console.log(1))
    .then(()=>console.log(2));

    promise2
    .then(()=> console.log(3))
    .then(()=>console.log(4));
}

export default Example2;

/* 
    OUTPUT
    1  3  2  4

    REASON:
    console.log(1) and console.log(3) are directly attached to the Promise, So they are executed 
    immediately. And then their second handlers console.log(2) and console.log(4) are executed.
*/

