import validateCart from '../Validations/validateCart.js';

function createOrder(cart){
    return new Promise(function (resolve,reject){
        if(validateCart(cart)){
            // const orderId = '12345';
            // resolve(orderId);

            setTimeout(() => {
                const orderId = '12345';
                resolve(orderId);
            },2000);
        }
        else{
            const err = new Error('cart is not valid!')
            reject(err);
        }
    })

    /* 
        Normal Asynchronous Error thrown by throw keyword are not handled by nearest catch handlers 
        As the Errors occurs asynchronously
        Executer function can only Handles errors which are thrown synchronously or by reject function
    */

    // return new Promise(function(resolve, reject) {
    //     setTimeout(() => {
    //     const err = new Error("Whoops!");
    //       throw err;
    //     //   reject(err); // reject be used instead of throw, if we have to handle any asynchrounous Error.
    //     }, 1000);
    //   }).catch(alert);
}

export default createOrder;