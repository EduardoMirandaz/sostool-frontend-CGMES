import { TestBed } from '@angular/core/testing';

import { UserReadService } from './user-read.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserReadService', () => {
  let service: UserReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    }).compileComponents();
    service = TestBed.inject(UserReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
