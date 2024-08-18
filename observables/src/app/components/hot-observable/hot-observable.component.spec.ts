import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservableComponent } from './hot-observable.component';

describe('HotObservableComponent', () => {
  let component: HotObservableComponent;
  let fixture: ComponentFixture<HotObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
