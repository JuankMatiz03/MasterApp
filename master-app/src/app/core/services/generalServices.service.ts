import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GeneralServices {

  private endPoint = "https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient){}

  private errorHandl(error: Error) {
      let errorMessage = '';
      if(error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.cause}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }

  getCountries(): Observable<any> {
    return this.http.get(this.endPoint)
    .pipe(
      map((res: any) => res as any),
      retry(1),
      catchError(this.errorHandl)
    )
  }

}