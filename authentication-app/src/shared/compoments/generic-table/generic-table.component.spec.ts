import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericTableComponent } from './generic-table.component';
import { Product } from '../../../core/models/product';

describe('GenericTableComponent', () => {
  let component: GenericTableComponent<Product>;
  let fixture: ComponentFixture<GenericTableComponent<Product>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GenericTableComponent<Product>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
