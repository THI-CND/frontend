import { Component, Input } from '@angular/core';
import { QuantifiedIngredientResponse } from '../../../types/recipe.types';
import { Observable } from 'rxjs';
import { IngredientService } from '../../../services/ingredient/ingredient.service';
import { IngredientResponse } from '../../../types/ingredient.types';

@Component({
  selector: 'app-recipe-step-quantified-ingredient',
  standalone: false,
  
  templateUrl: './recipe-step-quantified-ingredient.component.html',
  styleUrl: './recipe-step-quantified-ingredient.component.scss'
})
export class RecipeStepQuantifiedIngredientComponent {
  @Input() quantifiedIngredient!: QuantifiedIngredientResponse;

  ingredient$!: Observable<IngredientResponse>;

  constructor(
    private ingredientService: IngredientService,
  ) {}

  ngOnInit() {
    this.getIngredient(this.quantifiedIngredient.ingredient);
  }

  getIngredient(ingredientId: number) {
    this.ingredient$ = this.ingredientService.getIngredientV1(ingredientId);
  }

}
