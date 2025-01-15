import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListPurchaseComponent } from './shopping-list-purchase.component';

describe('ShoppingListPurchaseComponent', () => {
  let component: ShoppingListPurchaseComponent;
  let fixture: ComponentFixture<ShoppingListPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
