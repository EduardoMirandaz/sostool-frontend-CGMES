import { TestBed } from '@angular/core/testing';

import { TeamViewService } from '../../../../../../src/app/components/views/workspace/team-view/team-view.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeamViewService', () => {
  let service: TeamViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(TeamViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
