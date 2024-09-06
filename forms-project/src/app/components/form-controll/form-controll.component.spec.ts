import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControllComponent } from './form-controll.component';

describe('FormControllComponent', () => {
  let component: FormControllComponent;
  let fixture: ComponentFixture<FormControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
