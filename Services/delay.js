function delay(milliseconds){
    return new Promise((resolve,reject) => setTimeout(()=>{
        console.log('Delay is called')
        resolve(milliseconds);
    },milliseconds));
}

export default delay;