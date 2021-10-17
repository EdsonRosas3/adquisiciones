import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/OptionNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  options:Option[] = [];
  constructor() { }

  ngOnInit(): void {
    this.options = [
      {id:1,nombre:"Inicio",url:"inicio", activo:true},
      {id:2,nombre:"Servicios",url:"servicio",activo:false},
      {id:3,nombre:"Nosotros",url:"nosotros",activo:false},
      {id:4,nombre:"Contacto",url:"contacto",activo:false}];
  }
  activationControl(optionInput:Option){
    this.options.map(option=>{
      if(option.nombre == optionInput.nombre){
        option.activo=true;
      }else{
        option.activo=false;
      }
    })
  }

}
