import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CompanyService } from './company.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));

  it('should getAllCompanies be truthy', inject([CompanyService], (service: CompanyService) => {
    expect(service.getAllCompanies()).toBeTruthy();
  }));
});
