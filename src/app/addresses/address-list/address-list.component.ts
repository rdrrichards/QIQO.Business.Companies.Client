import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../../companies/company.service';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() addresses: Address[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompany('a9b9af73-efdb-4a17-a5bf-7d421560e596').subscribe(response => {
      this.addresses = response.result.companyAddresses;
    });
  }

}
