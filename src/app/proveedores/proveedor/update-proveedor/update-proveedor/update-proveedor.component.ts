import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProveedorService } from 'src/app/proveedores/service/proveedor.service';
import { ListProveedoresComponent } from '../../list-proveedores/list-proveedores.component';

@Component({
  providers: [ListProveedoresComponent],
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.scss']
})
export class UpdateProveedorComponent implements OnInit {

  form!:FormGroup
  id_proveedor:any
  constructor(private service:ProveedorService, private formBuild:FormBuilder, private idProv:ListProveedoresComponent) {
    this.form = this.formBuild.group({
      email:[''],
      name:[''],
      rubro:[''],
      direction:[''],
      phone:['']
    })
   }

  ngOnInit(): void {
  }

  updateData(){
    /* console.log(id_proveedor)
    this.service.putProveedor(id_proveedor, this.form.value).subscribe(arg =>{
      console.log(arg)
    })
    this.form.reset() */
  }

}
