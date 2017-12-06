import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddressComponent } from './address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule, InputTextModule, RadioButtonModule } from 'primeng/primeng';
import { CompanyService } from '../../companies/company.service';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent ],
      imports: [HttpClientModule, HttpClientTestingModule, ReactiveFormsModule,
        PanelModule, InputTextModule, BrowserAnimationsModule, RadioButtonModule],
      providers: [CompanyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
