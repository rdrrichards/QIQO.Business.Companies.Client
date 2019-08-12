import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AttributeComponent, AttributeListComponent } from '../../projects/entity-attribute/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
// import { PanelModule, TableModule, ButtonModule, RadioButtonModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CompanyService } from './companies/company.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent, AddressListComponent } from '../../projects/entity-address/src/public-api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AttributeComponent, AttributeListComponent, AddressComponent, AddressListComponent
      ],
      imports: [ReactiveFormsModule, PanelModule, TableModule, ButtonModule,
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
