import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorsComponent } from './book-authors.component';

describe('BookAuthorsComponent', () => {
  let component: BookAuthorsComponent;
  let fixture: ComponentFixture<BookAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
