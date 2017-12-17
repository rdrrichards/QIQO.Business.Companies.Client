import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiResponse } from '../common/response';

@Injectable()
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(`${environment.baseUrls.companies}`)
      .map(response => response);
  }
  getCompany(id: string): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(`${environment.baseUrls.companies}/${id}`)
      .map(response => response);
  }
}
