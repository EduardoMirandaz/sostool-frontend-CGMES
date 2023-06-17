import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRoleReadComponent } from '../../../../../../src/app/components/views/model-role/model-role-read/model-role-read.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelRoleReadComponent', () => {
  let component: ModelRoleReadComponent;
  let fixture: ComponentFixture<ModelRoleReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ModelRoleReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelRoleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
