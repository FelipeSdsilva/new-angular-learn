import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingComponent } from './input-binding.component';

describe('InputBindingComponent', () => {
  let component: InputBindingComponent;
  let fixture: ComponentFixture<InputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
