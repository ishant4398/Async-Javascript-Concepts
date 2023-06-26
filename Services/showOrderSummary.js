import validatePayment from '../Validations/validatePayment.js';

function showOrderSummary(orderId, paymentInfo){
    return new Promise(function (resolve,reject){
        if(validatePayment(paymentInfo)){
            // const orderSummary = 'Thankyou for shopping! Your Order has been placed. Order Id = '+ orderId;
            // resolve({orderId, orderSummary});

            setTimeout(() => {
                const orderSummary = 'Thankyou for shopping! Your Order has been placed. Order Id = '+ orderId;
                resolve({orderId, orderSummary});
            },2000);
        }
        else{
            const err = new Error('Sorry! we are unable to fetch order summary');
            reject(err);
        }
    })
}

export default showOrderSummary;