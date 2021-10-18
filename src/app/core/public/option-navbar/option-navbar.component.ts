import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from 'src/app/models/OptionNavbar';

@Component({
  selector: 'app-option-navbar',
  templateUrl: './option-navbar.component.html',
  styleUrls: ['./option-navbar.component.scss']
})
export class OptionNavbarComponent implements OnInit {
  @Input() option!:Option;
  @Output() activationControl: EventEmitter<Option> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activateIt(option:Option){
    this.option.activo = true;
    this.activationControl.emit(option);
}

}
