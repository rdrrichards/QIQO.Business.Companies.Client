import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule, InputTextModule, ButtonModule, DataTableModule, RadioButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attributes/attribute/attribute.component';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';
import { CompanyService } from './companies/company.service';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './addresses/address/address.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeListComponent,
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    RadioButtonModule
  ],
  providers: [ CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
