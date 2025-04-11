import { TestBed } from '@angular/core/testing';

import { PacketaService } from './packeta.service';

describe('PacketaService', () => {
  let service: PacketaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacketaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
