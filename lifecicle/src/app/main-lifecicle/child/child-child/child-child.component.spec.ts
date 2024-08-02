import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChildComponent } from './child-child.component';

describe('ChildChildComponent', () => {
  let component: ChildChildComponent;
  let fixture: ComponentFixture<ChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
