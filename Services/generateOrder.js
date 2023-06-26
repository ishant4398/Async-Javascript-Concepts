import { CART } from "../Constants.js";
import createOrder from "./createOrder.js";
import proceedToPayment from "./proceedToPayment.js";
import showOrderSummary from "./showOrderSummary.js";
import showWalletBalance from "./showWalletBalance.js";
import updateWallet from "./updateWallet.js";

const generateOrder = async () =>{

    try{
        const OrderId = await createOrder(CART);
        const {paymentInfo} = await proceedToPayment(OrderId);
        const {orderSummary}  = await showOrderSummary(OrderId, paymentInfo);
        const updateWalletBalance = await updateWallet(OrderId);
        const walletBalance = await showWalletBalance(updateWalletBalance);

        console.log('Order ID -', OrderId);
        console.log(paymentInfo);
        console.log(orderSummary);
        console.log(updateWalletBalance);
        console.log(walletBalance);
    }

    catch(err){
        console.log(err.message);
    }

    finally{
        console.log('Execution Completed - Finally')
    }
    
}

export default generateOrder;