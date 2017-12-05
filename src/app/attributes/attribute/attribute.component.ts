import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  @Input() attribute: Attribute;
  @Input() readOnly = false;

  constructor() {}

  ngOnInit() {}
}
