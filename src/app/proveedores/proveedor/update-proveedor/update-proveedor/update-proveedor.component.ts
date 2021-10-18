import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/proveedores/service/proveedor.service';
import { Proveedor } from 'src/model/proveedor.model';
import { ListProveedoresComponent } from '../../list-proveedores/list-proveedores.component';

@Component({
  providers: [ListProveedoresComponent],
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.scss']
})
export class UpdateProveedorComponent implements OnInit {

  form!:FormGroup
  id!:number;
  proveedor!:Proveedor;
  constructor(private activatedRoute: ActivatedRoute,private service:ProveedorService, private formBuild:FormBuilder, private idProv:ListProveedoresComponent) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.form = this.formBuild.group({
      email:'',
      name:'',
      rubro:'',
      direction:'',
      phone:''
    })
   }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.service.getProduct(this.id).subscribe(arg=>{
      this.proveedor=arg;
    })
  }
  updateData(){

    this.service.putProveedor(this.id, this.form.value).subscribe(arg =>{
      console.log(arg)
    })
    //this.form.reset() 
  }

}
