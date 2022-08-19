import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensionerService {
  aadhar: string = '';
  constructor(private http: HttpClient) {}

  listPensionerDetails() {
    return this.http
      .get(`${environment.apiUrl}getAllPensioner`)
      .pipe(catchError(this.handleError));
  }

  viewPensioner(id: string) {
    this.aadhar = id;
    return this.http
      .get(`${environment.apiUrl}PensionerDetailByAadhaar/` + id)
      .pipe(catchError(this.handleError));
  }

  processPensioner(aadharNum: String) {
    const aadharObj = { aadharNumber: aadharNum };
    return this.http
      .post(`${environment.apiUrl}ProcessPension`, aadharObj)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
