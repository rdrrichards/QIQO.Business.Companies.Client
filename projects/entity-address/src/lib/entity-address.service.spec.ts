import { TestBed } from '@angular/core/testing';

import { EntityAddressService } from './entity-address.service';

describe('EntityAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityAddressService = TestBed.get(EntityAddressService);
    expect(service).toBeTruthy();
  });
});
