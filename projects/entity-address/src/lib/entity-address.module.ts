import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';



@NgModule({
  declarations: [AddressComponent, AddressListComponent],
  imports: [
  ],
  exports: [AddressComponent, AddressListComponent]
})
export class EntityAddressModule { }
