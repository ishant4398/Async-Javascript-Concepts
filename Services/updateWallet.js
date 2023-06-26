import validateOrderSummary from '../Validations/validateOrderSummary.js';

function updateWallet(orderId){
    return new Promise(function (resolve,reject){
        if(validateOrderSummary(orderId)){
            // const updateWalletBalance = 'Your Wallet has been updated!';
            // resolve(updateWalletBalance);

            setTimeout(() => {
                const updateWalletBalance = 'Your Wallet has been updated!';
                resolve(updateWalletBalance);
            },2000);
        }
        else{
            const err = new Error('Wallet failed to update!');
            reject(err);
        }
    })
}

export default updateWallet;