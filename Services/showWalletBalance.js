import validateWallet from '../Validations/validateWallet.js';

function showWalletBalance(updateWalletBalance){
    return new Promise(function (resolve,reject){
        if(validateWallet(updateWalletBalance)){
            // const walletBalance = 'Wallet Balance - Rs.35000';
            // resolve(walletBalance);
            
            setTimeout(() => {
                const walletBalance = 'Wallet Balance - Rs.35000';
                resolve(walletBalance);
            },2000);
        }
        else{
            const err = new Error('Unable to fetch wallet balance')
            reject(err);
        }
    })
}

export default showWalletBalance;