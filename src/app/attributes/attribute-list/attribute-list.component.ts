import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { CompanyService } from '../../companies/company.service';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {
  @Input() attributes: Attribute[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompany('a9b9af73-efdb-4a17-a5bf-7d421560e596').subscribe(response => {
      this.attributes = response.result.companyAttributes;
    });
  }

}
