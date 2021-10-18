import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOrdenService } from '../detalle-orden.service';
import { PurchaseOrders } from '../purchaseOrders';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})

export class VerDetalleComponent implements OnInit {
  public model!: PurchaseOrders;
  public detalleOrden!: PurchaseOrders;
  public originalDetalleOrden!: PurchaseOrders;
  public products: Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute, private detalle: DetalleOrdenService) {
    let id = this.activatedRoute.snapshot.params.id;
    this.builtData();
    this.detalle.getProduct().subscribe((arg: any) => {
      console.log(arg);
      this.products = arg;
      this.model = Object.assign({}, this.products[0]);
      this.originalDetalleOrden = this.products[0];
    });
  }

  ngOnInit(): void {
  }
  getProductId(id: number){
  
    this.detalle.getProductId(id).subscribe(arg => {
      console.log(arg);
    });
  console.log('esta funcionando');
  }
  builtData(): void {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    /* this.detalleOrden = {
      id: 1,
      state: 'PEN',
      receivedType: 'RP',
      paymentStatus: 'NO_PAYMENT',
      totalAmount: 30,
      balanceAmount: 10,
      amountProduct: 3,
      products: [
        {
          id: 23,
          name: 'Alcohol en gel',
          price: 10
        }
      ],
      provider: [
        {
          id: 23,
          name: 'Alcohol en gel'
        }
      ]
    }
    this.detalle.postProduct(this.detalleOrden).subscribe((newDetalle: any) => {
      console.log(newDetalle);
      this.products = this.products.concat(newDetalle);
    }); */
  }
}

