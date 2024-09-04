import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProductComponent } from './dialog-edit-product.component';

describe('DialogEditProductComponent', () => {
  let component: DialogEditProductComponent;
  let fixture: ComponentFixture<DialogEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
