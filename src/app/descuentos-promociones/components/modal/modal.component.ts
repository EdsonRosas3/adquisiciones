import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showModal!: boolean;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService
      .getIsActive()
      .subscribe((state) => (this.showModal = state));
  }
}
