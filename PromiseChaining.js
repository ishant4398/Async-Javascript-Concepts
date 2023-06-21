import {CART} from "./Constants.js";
import createOrder from './API/createOrder.js';
import proceedToPayment from './API/proceedToPayment.js';
import showOrderSummary from './API/showOrderSummary.js';
import updateWallet from './API/updateWallet.js';
import showWalletBalance from './API/showWalletBalance.js';


// Promise Chaining
createOrder(CART)
.then(function (orderId) {
    console.log('Order ID -',orderId); 
    return orderId;
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function ({orderId, paymentInfo}) {
    console.log(paymentInfo);
    return {orderId, paymentInfo};
})
.then(function ({orderId, paymentInfo}){
    return showOrderSummary(orderId, paymentInfo);
})
.then(function ({orderId, orderSummary}) { 
    console.log(orderSummary)
    return orderId;
})
.then(function (orderId){
    return updateWallet(orderId);
})
.then(function (updateWalletBalance) { 
    console.log(updateWalletBalance);
    return updateWalletBalance;
})
.then(function (updateWalletBalance){
    return showWalletBalance(updateWalletBalance);
})
.then(function (walletBalance) {
    console.log(walletBalance);
    return walletBalance;
});


/* Refactoring Code */

// APIs
// function createOrder(cart){
//     return new Promise(function (resolve,reject){
//         if(validateCart(cart)){
//             const orderId = '12345';
//             resolve(orderId);
//         }
//         else{
//             const err = new Error('cart is not valid!')
//             reject(err);
//         }
//     })
// }

// function proceedToPayment(orderId){
//     return new Promise(function (resolve,reject){
//         if(validateOrder(orderId)){
//             const paymentInfo = 'Thankyou! Rupees received 10500 for Order Id = '+ orderId;

//             // Passing Multiple Arguments to Resolve using Object Destructuring
//             // Array Destructuring can also be used
//             resolve({orderId, paymentInfo});
//         }
//         else{
//             const err = new Error('Payment Failed!');
//             reject(err);
//         }
//     })
// }

// function showOrderSummary(orderId, paymentInfo){
//     return new Promise(function (resolve,reject){
//         if(validatePayment(paymentInfo)){
//             const orderSummary = 'Thankyou for shopping! Your Order has been placed. Order Id = '+ orderId;

//             // Passing Multiple Arguments to Resolve using Object Destructuring
//             // Array Destructuring can also be used
//             resolve({orderId, orderSummary});
//         }
//         else{
//             const err = new Error('Sorry! we are unable to fetch order summary');
//             reject(err);
//         }
//     })
// }

// function updateWallet(orderId){
//     return new Promise(function (resolve,reject){
//         if(validateOrderSummary(orderId)){
//             const updateWalletBalance = 'Your Wallet has been updated!';
//             resolve(updateWalletBalance);
//         }
//         else{
//             const err = new Error('Wallet failed to update!');
//             reject(err);
//         }
//     })
// }

// function showWalletBalance(updateWalletBalance){
//     return new Promise(function (resolve,reject){
//         if(validateWallet(updateWalletBalance)){
//             const walletBalance = 'Wallet Balance - Rs.35000';
//             resolve(walletBalance);
//         }
//         else{
//             const err = new Error('Unable to fetch wallet balance')
//             reject(err);
//         }
//     })
// }


// Validations
// function validateCart(cart){
//     return true;
// }
// function validateOrder(orderId){
//     return true;
// }
// function validatePayment(paymentInfo){
//     return true;
// }
// function validateOrderSummary(orderId){
//     return true;
// }
// function validateWallet(updateWalletBalance){
//     return true;
// }