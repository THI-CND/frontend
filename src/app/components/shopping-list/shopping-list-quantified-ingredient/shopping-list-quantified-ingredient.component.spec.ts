import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListQuantifiedIngredientComponent } from './shopping-list-quantified-ingredient.component';

describe('ShoppingListQuantifiedIngredientComponent', () => {
  let component: ShoppingListQuantifiedIngredientComponent;
  let fixture: ComponentFixture<ShoppingListQuantifiedIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListQuantifiedIngredientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListQuantifiedIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
