import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStepQuantifiedIngredientComponent } from './recipe-step-quantified-ingredient.component';

describe('RecipeStepQuantifiedIngredientComponent', () => {
  let component: RecipeStepQuantifiedIngredientComponent;
  let fixture: ComponentFixture<RecipeStepQuantifiedIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeStepQuantifiedIngredientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeStepQuantifiedIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
