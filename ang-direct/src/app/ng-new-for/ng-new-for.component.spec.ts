import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNewForComponent } from './ng-new-for.component';

describe('NgNewForComponent', () => {
  let component: NgNewForComponent;
  let fixture: ComponentFixture<NgNewForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgNewForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNewForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
