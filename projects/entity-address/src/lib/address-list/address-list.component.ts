import { Component, Input } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  template: `<p-table [value]="addresses" class="ui-g-12">
    <tr>
      <td field="addressId" header="Address Id" hidden="hidden"></td>
      <td field="addressType.addressTypeName" header="Address Type"></td>
      <td field="addressLine1" header="Address Line 1"></td>
      <td field="addressCity" header="City"></td>
      <td field="addressState" header="State"></td>
      <td field="addressPostalCode" header="Postal"></td>
    </tr>
  </p-table>`
})
export class AddressListComponent {
  @Input() addresses: Address[] = [];
  constructor() { }
}
