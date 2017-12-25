import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AttributeComponent } from '@rdrrichards/entity-attribute';
import { AttributeListComponent } from '@rdrrichards/entity-attribute';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule, DataTableModule, ButtonModule, RadioButtonModule } from 'primeng/primeng';
import { CompanyService } from './companies/company.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from '@rdrrichards/entity-address';
import { AddressListComponent } from '@rdrrichards/entity-address';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AttributeComponent, AttributeListComponent, AddressComponent, AddressListComponent
      ],
      imports: [ReactiveFormsModule, PanelModule, DataTableModule, ButtonModule,
        HttpClientModule, HttpClientTestingModule, BrowserAnimationsModule, RadioButtonModule],
      providers: [CompanyService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'QIQO Business Companies Client'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('QIQO Business Companies Client');
  }));
  it('ngOnInint should return undefined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.ngOnInint).toBeUndefined();
  }));
});
