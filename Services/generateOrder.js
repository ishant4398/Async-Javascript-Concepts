import { CART } from "../Constants.js";
import createOrder from "./createOrder.js";
import proceedToPayment from "./proceedToPayment.js";
import showOrderSummary from "./showOrderSummary.js";
import showWalletBalance from "./showWalletBalance.js";
import updateWallet from "./updateWallet.js";

const generateOrder = async () =>{

    try{
        console.log('Processing....');
        
        const OrderId = await createOrder(CART);
        console.log('Order ID -', OrderId);

        const {paymentInfo} = await proceedToPayment(OrderId);
        console.log(paymentInfo);

        const {orderSummary}  = await showOrderSummary(OrderId, paymentInfo);
        console.log(orderSummary);

        const updateWalletBalance = await updateWallet(OrderId);
        console.log(updateWalletBalance);

        const walletBalance = await showWalletBalance(updateWalletBalance);
        console.log(walletBalance);
    }
    catch(err){
        console.log(err.message);
    }

    finally{
        // Will Execute regardless of the promise resolved or rejected.
        // Used for Clean Up procedure.
        console.log('Execution Completed - Finally')
    }
    
}

export default generateOrder;