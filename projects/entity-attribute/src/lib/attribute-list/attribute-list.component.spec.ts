import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AttributeListComponent } from './attribute-list.component';
import { TableModule } from 'primeng/table';

describe('AttributeListComponent', () => {
  let component: AttributeListComponent;
  let fixture: ComponentFixture<AttributeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeListComponent ],
      imports: [HttpClientModule, HttpClientTestingModule, TableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
