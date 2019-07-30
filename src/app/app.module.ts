import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyService } from './companies/company.service';
import { EntityAddressModule } from '../../projects/entity-address/src/public-api';
import { EntityAttributeModule } from '../../projects/entity-attribute/src/public-api';
import { PanelModule, RadioButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    RadioButtonModule,
    EntityAddressModule,
    EntityAttributeModule
  ],
  providers: [ CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
