import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyService } from './companies/company.service';
import { EntityAddressModule } from '../../projects/entity-address/src/public-api';
import { AttributeModule } from '@rdrrichards/entity-attribute';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    EntityAddressModule,
    AttributeModule
  ],
  providers: [ CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
