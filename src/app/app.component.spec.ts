import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AttributeComponent } from './attributes/attribute/attribute.component';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule, DataTableModule, ButtonModule, RadioButtonModule } from 'primeng/primeng';
import { CompanyService } from './companies/company.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from './addresses/address/address.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';

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
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the QIQO Business Companies Client!');
  }));
});
