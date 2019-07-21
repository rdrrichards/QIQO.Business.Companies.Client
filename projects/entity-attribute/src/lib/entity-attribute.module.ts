import { NgModule } from '@angular/core';
import { AttributeComponent } from './attribute/attribute.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';



@NgModule({
  declarations: [AttributeComponent, AttributeListComponent],
  imports: [
  ],
  exports: [AttributeComponent, AttributeListComponent]
})
export class EntityAttributeModule { }
