import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLifecicleComponent } from './main-lifecicle.component';

describe('MainLifecicleComponent', () => {
  let component: MainLifecicleComponent;
  let fixture: ComponentFixture<MainLifecicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLifecicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLifecicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
