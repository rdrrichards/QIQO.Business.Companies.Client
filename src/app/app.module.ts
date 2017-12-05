import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attributes/attribute/attribute.component';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
