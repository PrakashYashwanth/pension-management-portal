import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PensionerService } from './pensioner.service';

describe('PensionerService', () => {
  let service: PensionerService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
