import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModelResponsibilityService } from 'src/app/components/views/model-responsibility/model-responsibility.service';

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
