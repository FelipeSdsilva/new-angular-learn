import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObservableComponent } from './cold-observable.component';

describe('ColdObservableComponent', () => {
  let component: ColdObservableComponent;
  let fixture: ComponentFixture<ColdObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
