import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Orden } from 'src/app/models/Orden';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-crear-orden-compra',
  templateUrl: './crear-orden-compra.component.html',
  styleUrls: ['./crear-orden-compra.component.scss']
})
export class CrearOrdenCompraComponent implements OnInit {
  
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
  }

  createOrder(){
    this.orderService.createOrder(this.form.value).subscribe(arg =>{
      console.log(arg)
    }) 
    //this.form.reset()
  }

}
