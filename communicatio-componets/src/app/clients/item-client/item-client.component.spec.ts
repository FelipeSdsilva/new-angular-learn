import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClientComponent } from './item-client.component';

describe('ItemClientComponent', () => {
  let component: ItemClientComponent;
  let fixture: ComponentFixture<ItemClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
