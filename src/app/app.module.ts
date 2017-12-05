import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule, InputTextModule, ButtonModule, DataTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attributes/attribute/attribute.component';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';
import { CompanyService } from './companies/company.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule
  ],
  providers: [ CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
