import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orden } from 'src/app/models/Orden';
import { DetalleOrdenService } from '../detalle-orden.service';
import { Products } from '../products';
import { Provider } from '../provider';
import { PurchaseOrders } from '../purchaseOrders';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})

export class VerDetalleComponent implements OnInit {

  orden!:Orden;
  products!:Products[];
  providers!:Provider[];
  id!:number;
  constructor(private activatedRoute: ActivatedRoute, private detalle: DetalleOrdenService) {
    this.id = this.activatedRoute.snapshot.params.id;

    /* this.detalle.getProduct().subscribe((arg: any) => {
      console.log(arg);
      this.products = arg;
      this.model = Object.assign({}, this.products[0]);
      this.originalDetalleOrden = this.products[0];
    }); */
  }

  ngOnInit(): void {
    this.getProductId();
  }
  getProductId(){
  
    this.detalle.getProductId(this.id).subscribe(arg => {
      this.orden=arg;
      this.products= this.orden.products;
      this.providers= this.orden.provider;
      console.log("RES",this.orden);

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

