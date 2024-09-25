import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdComponent } from './dvd.component';

describe('DvdComponent', () => {
  let component: DvdComponent;
  let fixture: ComponentFixture<DvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
