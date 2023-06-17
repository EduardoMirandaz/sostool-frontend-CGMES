import { TestBed } from '@angular/core/testing';

import { ModelResponsibilityService } from './model-responsibility.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelResponsibilityService', () => {
  let service: ModelResponsibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    }).compileComponents();
    service = TestBed.inject(ModelResponsibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
