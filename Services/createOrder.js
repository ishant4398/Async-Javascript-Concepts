import validateCart from '../Validations/validateCart.js';

function createOrder(cart){
    return new Promise(function (resolve,reject){
        if(validateCart(cart)){
            const orderId = '12345';
            resolve(orderId);
        }
        else{
            const err = new Error('cart is not valid!')
            reject(err);
        }
    })
}

export default createOrder;