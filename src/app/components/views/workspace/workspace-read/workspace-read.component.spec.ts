import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceReadComponent } from './workspace-read.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorkspaceReadComponent', () => {
  let component: WorkspaceReadComponent;
  let fixture: ComponentFixture<WorkspaceReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceReadComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
