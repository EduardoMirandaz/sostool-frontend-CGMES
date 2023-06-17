import { TestBed } from '@angular/core/testing';

import { ModelRoleService } from '../../../../../src/app/components/views/model-role/model-role.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelRoleService', () => {
  let service: ModelRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(ModelRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
