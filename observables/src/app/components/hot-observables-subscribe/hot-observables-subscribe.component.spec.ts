import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservablesSubscribeComponent } from './hot-observables-subscribe.component';

describe('HotObservablesSubscribeComponent', () => {
  let component: HotObservablesSubscribeComponent;
  let fixture: ComponentFixture<HotObservablesSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotObservablesSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotObservablesSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
