import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Orden } from 'src/app/models/Orden';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-edit-purchase-order',
  templateUrl: './edit-purchase-order.component.html',
  styleUrls: ['./edit-purchase-order.component.scss']
})
export class EditPurchaseOrderComponent implements OnInit {
  order!:Orden;
  form:FormGroup;
  constructor(public orderService: PurchaseOrderService,private formBuild:FormBuilder) {
    this.form = this.formBuild.group({
      state:[''],
      receivedType:[''],
      paymentStatus:[''],
      totalAmount:[''],
      balanceAmount:[''],
      amountProduct:[''],
    })
  }

  ngOnInit(): void {

    this.form = this.formBuild.group({
      state:[this.order.state],
      receivedType:[this.order.receivedType],
      paymentStatus:[''],
      totalAmount:[''],
      balanceAmount:[''],
      amountProduct:[''],
    })
  }
  share(){
    
  }
  editOrder(){
    /* this.orderService.editOrder(this.order).subscribe(
      data =>{
        console.log("PUT Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      } 
    ) */
    //this.order = {id: 0, state: "", receivedType: "", paymentStatus: "", totalAmount: 0, balanceAmount: 0, amountProduct:0, products:[], provider:[]};
  }
}
