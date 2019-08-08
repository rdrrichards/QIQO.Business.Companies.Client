import { Component, Input } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  template: `<p-table [value]="addresses" class="ui-g-12">
    <p-column field="addressId" header="Address Id" hidden="hidden"></p-column>
    <p-column field="addressType.addressTypeName" header="Address Type"></p-column>
    <p-column field="addressLine1" header="Address Line 1"></p-column>
    <p-column field="addressCity" header="City"></p-column>
    <p-column field="addressState" header="State"></p-column>
    <p-column field="addressPostalCode" header="Postal"></p-column>
  </p-table>`
})
export class AddressListComponent {
  @Input() addresses: Address[] = [];
  constructor() { }
}
