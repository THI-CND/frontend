import { Component, Input } from '@angular/core';
import { QuantifiedIngredientRequest, QuantifiedIngredientResponse, RecipeResponse, StepRequest, StepResponse } from '../../../types/recipe.types';
import { IngredientResponse } from '../../../types/ingredient.types';
import { IngredientService } from '../../../services/ingredient/ingredient.service';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateIngredientComponent } from '../../home/create-ingredient/create-ingredient.component';

@Component({
  selector: 'app-edit-recipe',
  standalone: false,
  
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
  @Input() recipe!: RecipeResponse;
  ingredients: IngredientResponse[] = [];

  constructor(
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  createIngredient() {
    this.dialog.open(CreateIngredientComponent).afterClosed().subscribe(() => {
      this.getIngredients();
    });
  }

  addStep() {
    this.recipe.steps.push({
      description: '',
      quantifiedIngredients: [],
    } as StepRequest as StepResponse);
  }

  removeStep(index: number) {
    this.recipe.steps.splice(index, 1);
  }

  addQuantifiedIngredient(step: StepResponse) {
    step.quantifiedIngredients.push({
      ingredient: this.ingredients[0].id,
      quantity: 0,
    } as QuantifiedIngredientRequest as QuantifiedIngredientResponse);
  }

  removeQuantifiedIngredient(step: StepResponse, index: number) {
    step.quantifiedIngredients.splice(index, 1);
  }

  update() {
    this.recipeService.updateRecipeV1(this.recipe.id, this.recipe).subscribe(() => {
      alert('Recipe updated');
    });
  }

}
