import { NgModule } from '@angular/core';
import { AttributeComponent } from './attribute/attribute.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AttributeComponent, AttributeListComponent],
  imports: [ ReactiveFormsModule, RadioButtonModule, PanelModule, TableModule ],
  exports: [AttributeComponent, AttributeListComponent]
})
export class EntityAttributeModule { }
