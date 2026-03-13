import { TestBed } from '@angular/core/testing';

import { OmdbAPIService } from './MovieAPIService';

describe('OmdbAPIService', () => {
  let service: OmdbAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
