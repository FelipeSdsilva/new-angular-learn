import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNativeValidationComponent } from './form-native-validation.component';

describe('FormNativeValidationComponent', () => {
  let component: FormNativeValidationComponent;
  let fixture: ComponentFixture<FormNativeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNativeValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNativeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
