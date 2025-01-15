import { Component, Input } from '@angular/core';
import { ShoppingListIngredient, ShoppingListResponse } from '../../../types/shopping-list.types';
import { IngredientResponse } from '../../../types/ingredient.types';
import { ShoppingListService } from '../../../services/shopping-list/shopping-list.service';
import { IngredientService } from '../../../services/ingredient/ingredient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-list-purchase',
  standalone: false,

  templateUrl: './shopping-list-purchase.component.html',
  styleUrl: './shopping-list-purchase.component.scss'
})
export class ShoppingListPurchaseComponent {

  @Input() shoppingList!: ShoppingListResponse;

  ingredients: IngredientResponse[] = [];

  addQuantity: any = {};

  constructor(
    private shoppingListService: ShoppingListService,
    private ingredientService: IngredientService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  getIngredient(id: number): IngredientResponse | null {
    return this.ingredients.find((ingredient) => ingredient.id == id) || null;
  }

  getPurchasedIngredient(id: number): ShoppingListIngredient {
    return this.shoppingList.purchasedIngredients.find((ingredient) => ingredient.ingredient == id) || { ingredient: id, quantity: 0 };
  }

  addPurchasedIngredient(ingredientId: number, quantity: number) {
    if (quantity != undefined)
      this.shoppingListService.addPurchasedIngredientToShoppingListV2(this.shoppingList.id, {
        ingredient: ingredientId, quantity: quantity,
      }).subscribe(() => {
        this.snackbar.open('Einkauf wurde vermerkt!', 'ok', { duration: 2000 });
        this.shoppingListService.getShoppingListV1(this.shoppingList.id).subscribe((shoppingList) => {
          this.shoppingList = shoppingList;
        });
      });
  }
}
