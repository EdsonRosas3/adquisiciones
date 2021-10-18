import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isActive!: boolean;
  isActive$!: Subject<boolean>;

  constructor() {
    this.handlerModal(false);
  }

  getIsActive(): Observable<boolean> {
    return this.isActive$.asObservable();
  }

  handlerModal(state: boolean) {
    this.isActive = state;
    this.isActive$.next(this.isActive);
  }
}
