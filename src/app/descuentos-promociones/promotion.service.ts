import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Items, Promotion } from './types/promotions';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private promotions!: Promotion[];
  private promotions$!: Subject<Promotion[]>;

  private items!: Items[];
  private items$!: Subject<Items[]>;

  private urlBase: string;
  //TODO: DELETE
  private urlItems: string;
  constructor(private http: HttpClient) {
    this.urlBase = 'http://localhost:3000/promotions';
    //TODO: DELETE
    this.urlItems = 'http://localhost:3000/items';

    this.promotions$ = new Subject();
    this.items$ = new Subject();
  }

  getPromotions(): Observable<Promotion[]> {
    this.http.get<Promotion[]>(this.urlBase).subscribe((res: Promotion[]) => {
      this.promotions = res;
      this.promotions$.next(this.promotions);
    });
    return this.promotions$.asObservable();
  }

  create(data: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(
      this.urlBase,
      JSON.stringify(data),
      httpOptions
    );
  }

  findAllByState(state: string): Observable<Promotion[]> {
    let url = `${this.urlBase}?status=${state}`;
    this.http.get<Promotion[]>(url).subscribe((res: Promotion[]) => {
      this.promotions = res;
      this.promotions$.next(this.promotions);
    });
    return this.promotions$.asObservable();
  }

  //TODO: DELETE
  getItems(): Observable<Items[]> {
    this.http.get<Items[]>(this.urlItems).subscribe((res: Items[]) => {
      this.items = res;
      this.items$.next(this.items);
    });
    return this.items$.asObservable();
  }

  private isLessThat(date: string, days: number) {
    let dateSplited = date.split('-');
    let day = dateSplited[2];
    let month = dateSplited[1];
    let currentDate = new Date();
    return (
      currentDate.getMonth() + 1 === parseInt(month) &&
      parseInt(day) - currentDate.getDate() < days
    );
  }

  findPromotionsNextToExpire(): Observable<Promotion[]> {
    this.http.get<Promotion[]>(this.urlBase).subscribe((res: Promotion[]) => {
      //TODO why its executing many times
      this.promotions = res.filter(
        (promotion) =>
          this.isLessThat(promotion.expirationDate, 15) &&
          promotion.status !== 'EXPIRED'
      );
      this.promotions$.next(this.promotions);
    });
    return this.promotions$.asObservable();
  }
}
