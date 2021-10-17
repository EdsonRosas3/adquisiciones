import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenesCompraModule } from 'src/app/ordenes-compra/ordenes-compra.module';
import { DetalleOrdenCompra } from '../detalle-orden-compra';
import { DetalleOrdenService } from '../detalle-orden.service';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})

export class VerDetalleComponent implements OnInit {
  public model!: DetalleOrdenCompra;
  public detalleOrden!: DetalleOrdenCompra;
  public originalDetalleOrden!: DetalleOrdenCompra;
  public products: Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute, private detalle: DetalleOrdenService) {
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
  builtData(): void {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.detalleOrden = {
      purchaseOrder: 123,
      quatity: 5,
      unitCost: 15,
      measureUnit: 'Bs',
      totalAmount: 75,
      item: 'Jabon',
      providerItemCode: 'Acosta',
      itemCode: 'codigo1',
      unidadDelProveedor: 'texto en blanco'
    }
    /* this.detalle.postProduct(this.detalleOrden).subscribe((newDetalle: any) => {
      console.log(newDetalle);
      this.products = this.products.concat(newDetalle);
    }); */
  }
}

