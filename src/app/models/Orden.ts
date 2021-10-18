export interface Orden{
    id:number;
    state:string;
    receivedType:string;
    paymentStatus:string;
    totalAmount:number;
    balanceAmount:number;
    amountProduct:number;
    products:[];
    provider:[];
}