import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSingleComponent } from '../../../../../../src/app/components/views/workspace/workspace-single/workspace-single.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorkspaceSingleComponent', () => {
  let component: WorkspaceSingleComponent;
  let fixture: ComponentFixture<WorkspaceSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceSingleComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
