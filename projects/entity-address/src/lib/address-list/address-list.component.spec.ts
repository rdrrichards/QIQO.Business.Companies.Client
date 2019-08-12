import { } from 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AddressListComponent } from './address-list.component';
import { TableModule } from 'primeng/table';

describe('AddressListComponent', () => {
  let component: AddressListComponent;
  let fixture: ComponentFixture<AddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressListComponent ],
      imports: [HttpClientModule, HttpClientTestingModule, TableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
