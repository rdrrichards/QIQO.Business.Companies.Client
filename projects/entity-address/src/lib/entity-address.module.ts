import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AddressComponent, AddressListComponent],
  imports: [ ReactiveFormsModule, RadioButtonModule, PanelModule, TableModule ],
  exports: [AddressComponent, AddressListComponent]
})
export class EntityAddressModule { }
