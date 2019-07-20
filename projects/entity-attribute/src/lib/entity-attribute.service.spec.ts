import { TestBed } from '@angular/core/testing';

import { EntityAttributeService } from './entity-attribute.service';

describe('EntityAttributeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityAttributeService = TestBed.get(EntityAttributeService);
    expect(service).toBeTruthy();
  });
});
