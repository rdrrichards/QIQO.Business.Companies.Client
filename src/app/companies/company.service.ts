import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../common/response';

@Injectable()
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(`${environment.baseUrls.companies}`).pipe(
        catchError(
          this.handleGatewayError('getAllCompanies', new ApiResponse())
        )
      );
  }
  getCompany(id: string): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(`${environment.baseUrls.companies}/${id}`).pipe(
        catchError(
          this.handleGatewayError('getCompany', new ApiResponse())
        )
      );
  }

  private handleGatewayError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('An error occured!', operation);
      console.log('error', error);
      switch (error.status) {
        case 0:
          console.log(error.statusText);
          break;
        case 404:
          console.log('404');
          break;
        default:
          console.log('default');
          break;
      }
      return of(result as T);
    };
  }
}
