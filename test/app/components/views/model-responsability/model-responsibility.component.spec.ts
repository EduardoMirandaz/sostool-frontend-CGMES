import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelResponsibilityComponent } from '../../../../../src/app/components/views/model-responsibility/model-responsibility.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelResponsibilityComponent', () => {
  let component: ModelResponsibilityComponent;
  let fixture: ComponentFixture<ModelResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelResponsibilityComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
