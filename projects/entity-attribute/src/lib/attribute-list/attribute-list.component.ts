import { Component, Input } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-attribute-list',
  template: `<p-table [value]="attributes" class="ui-g-12">
    <tr>
    <td field="attributeId" header="Attribute Id" hidden="hidden"></td>
    <td field="attributeType.attributeTypeName" header="Attribute Type Name"></td>
    <td field="attributeValue" header="Attribute Value"></td>
    <td field="attributeDataType" header="Data Type"></td>
    <td field="attributeDisplayFormat" header="Display Format"></td>
    <td field="attributeType.attributeTypeDesc" header="Description"></td>
    </tr>
  </p-table>`
})
export class AttributeListComponent {
  @Input() attributes: Attribute[] = [];

  constructor() { }
}
