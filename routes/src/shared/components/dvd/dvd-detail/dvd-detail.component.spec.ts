import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdDetailComponent } from './dvd-detail.component';

describe('DvdDetailComponent', () => {
  let component: DvdDetailComponent;
  let fixture: ComponentFixture<DvdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvdDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
