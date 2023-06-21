import validateOrder from '../Validations/validateOrder.js';

function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        if(validateOrder(orderId)){
            const paymentInfo = 'Thankyou! Rupees received 10500 for Order Id = '+ orderId;

            // Passing Multiple Arguments to Resolve using Object Destructuring
            // Array Destructuring can also be used
            resolve({orderId, paymentInfo});
        }
        else{
            const err = new Error('Payment Failed!');
            reject(err);
        }
    })
}

export default proceedToPayment;