import { Component, Input } from '@angular/core';
import { ShoppingListIngredient } from '../../../types/shopping-list.types';
import { IngredientResponse } from '../../../types/ingredient.types';
import { Observable } from 'rxjs';
import { IngredientService } from '../../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-shopping-list-quantified-ingredient',
  standalone: false,
  
  templateUrl: './shopping-list-quantified-ingredient.component.html',
  styleUrl: './shopping-list-quantified-ingredient.component.scss'
})
export class ShoppingListQuantifiedIngredientComponent {
  @Input() quantifiedIngredient!: ShoppingListIngredient;

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
