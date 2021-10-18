import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { OptionNavbarComponent } from './option-navbar/option-navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    OptionNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent]
})
export class PublicModule { }
