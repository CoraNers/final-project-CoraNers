import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataServiceProvider {

  // onTheMenuItems = [
  //   {
  //   "name": "Spicy Shrimp",
  //   "isFavorite": false,
  //   "ingredientList": [
  //     {
  //       "name": "Shrimp"
  //     },
  //     {
  //       "name": "Chili Paste"
  //     },
  //     {
  //       "name": "Lemon"
  //     }
  //   ]
  //   },
  //   {
  //     "name": "Spicy Shrimp 2",
  //     "isFavorite": true,
  //     "ingredientList": [
  //       {
  //         "name": "Shrimp2"
  //       },
  //       {
  //         "name": "Chili Paste2"
  //       },
  //       {
  //         "name": "Lemon2"
  //       }
  //     ]
  //     }
  // ];

  putItems: any = [];

  // onTheMenuItems: any = [];
  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  baseURL = "http://localhost:8080";
  // baseURL = "http://192.168.0.28:8080";

  constructor(public http: HttpClient) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
    console.log('In constructor of data service');
  }

  getOnTheMenuItems() {
  // getOnTheMenuItems(): Observable<object[]> {
    console.log('read to make the api call');
    // return this.onTheMenuItems;
    return this.http.get(this.baseURL + '/api/myCollection').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
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

  saveMeal(mealData) {
    console.log("CORA MEALDATA");
    console.log(mealData);


    // this.http.post(this.baseURL + '/api/myCollection/', mealData).subscribe(res => {
    //   this.putItems = res;
    //   console.log('PUT ITEMS', this.putItems);
    //   this.dataChangeSubject.next(true);
    // })
  }

}
