import { Provider } from "@angular/core";
import { Products } from "./products";

export interface PurchaseOrders{
    id: number;
    state: string;
    receivedType: string;
    paymentStatus: string;
    totalAmount: number;
    balanceAmount:number;
    amountProduct: number;
    products: Products[];
    provider: Provider[];
}