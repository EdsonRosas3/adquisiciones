import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../service/proveedor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regist-proveedor',
  templateUrl: './regist-proveedor.component.html',
  styleUrls: ['./regist-proveedor.component.scss']
})
export class RegistProveedorComponent implements OnInit {

  public form!: FormGroup; 

  constructor(private service:ProveedorService, private formBuild:FormBuilder) {
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

  sendData(){
    /* if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("FILL ALL FIELDS")
    } */
     this.service.postProveedor(this.form.value).subscribe(arg =>{
      console.log(arg)
    })
    this.form.reset()
  }
  

}
