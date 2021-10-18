import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-crear-orden-compra',
  templateUrl: './crear-orden-compra.component.html',
  styleUrls: ['./crear-orden-compra.component.scss']
})
export class CrearOrdenCompraComponent implements OnInit {
  
  order: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }={id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount:0, balanceAmount:0, amountProduct:0, products:[], provider:[]};
  constructor(public orderService: PurchaseOrderService) { }

  ngOnInit(): void {
  }

  createOrder(){
    this.orderService.createOrder(this.order).subscribe(
      data =>{
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      } 
    )
    this.order = {id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount: 0, balanceAmount: 0, amountProduct:0, products:[], provider:[]};
  }

}
