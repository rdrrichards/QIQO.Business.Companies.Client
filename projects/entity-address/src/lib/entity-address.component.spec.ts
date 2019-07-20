import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAddressComponent } from './entity-address.component';

describe('EntityAddressComponent', () => {
  let component: EntityAddressComponent;
  let fixture: ComponentFixture<EntityAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
