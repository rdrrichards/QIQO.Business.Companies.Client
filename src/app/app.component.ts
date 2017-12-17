import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { CompanyService } from './companies/company.service';
import { Address } from '@qiqo/entity-address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  address: Address;
  addresses: Address[];
  title = 'QIQO Business Companies Client';
  env = environment.environmentName;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit() {
    this.companyService.getCompany('a9b9af73-efdb-4a17-a5bf-7d421560e596').subscribe(response => {
      this.address = response.result.companyAddresses[0];
      this.addresses = response.result.companyAddresses;
    });
  }
}
