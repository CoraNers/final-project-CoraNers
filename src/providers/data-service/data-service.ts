import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataServiceProvider {

  putItems: any = [];

  onTheMenuItems: any = [];
  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  // baseURL = "http://localhost:8080";
  baseURL = "http://192.168.0.28:8080";

  constructor(public http: HttpClient) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getOnTheMenuItems(): Observable<any> {
    return this.http.get(this.baseURL + '/api/onTheMenu/myCollection').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getFavorites(): Observable<any> {
    return this.http.get(this.baseURL + '/api/favorites/myCollection').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  saveMeal(mealData) {
    this.http.post(this.baseURL + '/api/myCollection', mealData).subscribe(res => {
      this.putItems = res;
      this.dataChangeSubject.next(true);
    })
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
