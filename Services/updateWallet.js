import validateOrderSummary from '../Validations/validateOrderSummary.js';

function updateWallet(orderId){
    return new Promise(function (resolve,reject){
        if(validateOrderSummary(orderId)){
            // setTimeout(()=>{
            //     const updateWalletBalance = 'Your Wallet has been updated!';
            //     resolve(updateWalletBalance);
            // },5000)
            const updateWalletBalance = 'Your Wallet has been updated!';
            resolve(updateWalletBalance);
        }
        else{
            const err = new Error('Wallet failed to update!');
            reject(err);
        }
    })
}

export default updateWallet;