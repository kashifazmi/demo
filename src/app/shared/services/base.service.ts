import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { localEnvironment } from 'src/environments/environment';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  //#region - Get Master details
  /** Fetch Master details */
  getMasterData() {
    return this.http.get(localEnvironment.API_URL + ConstantsService.Common_APIURL.MasterDetails.GET, httpOptions)
      .pipe(
        tap(_ => this.log('get master details')),
        catchError(this.handleError<any[]>('getMasterDataMethod', []))
      );
  }
  //#endregion

  //#region - Handle common error
  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
*/
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  public log(message: string) {
    // error message will be ready here.
    // We need to reuse this message in services
    // this.messageService.add(`HeroService: ${message}`);
  }
}
//#endregion

export const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};