import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-list-purchase-orden-no-end',
  templateUrl: './list-purchase-orden-no-end.component.html',
  styleUrls: ['./list-purchase-orden-no-end.component.scss']
})
export class ListPurchaseOrdenNoEndComponent implements OnInit {
  orders:any =[];
  ordersNoEnd:any[]  = [];
  selectedOrder:any= [];
  //order: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }={id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount:0, balanceAmount:0, amountProduct:0, products:[], provider:[]};

  constructor(public orderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      listOrders =>{
        this.orders = listOrders;
        for(let ord of this.orders){
          if (ord.state=="APR" || ord.state=="PEN" ) {
            this.ordersNoEnd.push(ord);
          }
       }
      console.log(this.ordersNoEnd);
      },
      error =>{
        console.log(error)
      }
    )
  }

  public selectOrder(order:any){
    this.selectedOrder = order;
    console.log(order);
  }
  
  finalizeOrder(order:any){
    //order.state = "FIN";
    this.orderService.createOrder(order).subscribe(
      data =>{
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      } 
    )
    //this.order = {id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount: 0, balanceAmount: 0, amountProduct:0, products:[], provider:[]};

  }
}
