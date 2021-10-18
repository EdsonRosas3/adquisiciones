import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-edit-purchase-order',
  templateUrl: './edit-purchase-order.component.html',
  styleUrls: ['./edit-purchase-order.component.scss']
})
export class EditPurchaseOrderComponent implements OnInit {

  order: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }={id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount:0, balanceAmount:0, amountProduct:0, products:[], provider:[]};
  constructor(public orderService: PurchaseOrderService) { }

  ngOnInit(): void {
  }

  editOrder(){
    this.orderService.editOrder(this.order).subscribe(
      data =>{
        console.log("PUT Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      } 
    )
    //this.order = {id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount: 0, balanceAmount: 0, amountProduct:0, products:[], provider:[]};
  }
}
