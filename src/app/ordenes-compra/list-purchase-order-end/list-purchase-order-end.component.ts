import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-list-purchase-order-end',
  templateUrl: './list-purchase-order-end.component.html',
  styleUrls: ['./list-purchase-order-end.component.scss']
})
export class ListPurchaseOrderEndComponent implements OnInit {
  orders:any =[];
  ordersEnd:any[]  = [];
  selectedOrder:any= [];
  constructor(public orderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      listOrders =>{
        this.orders = listOrders;
        for(let ord of this.orders){
          if (ord.state=="FIN") {
            this.ordersEnd.push(ord);
          }
       }
      console.log(this.ordersEnd);
      },
      error =>{
        console.log(error)
      }
    )
  }

  public selectOrder(order:any){
    this.selectedOrder = order;
  }

}
