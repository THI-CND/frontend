import { Component, Input } from '@angular/core';
import { ShoppingListResponse } from '../../../types/shopping-list.types';
import { ShoppingListService } from '../../../services/shopping-list/shopping-list.service';
import { Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { RecipeResponse } from '../../../types/recipe.types';

@Component({
  selector: 'app-edit-shopping-list',
  standalone: false,
  
  templateUrl: './edit-shopping-list.component.html',
  styleUrl: './edit-shopping-list.component.scss'
})
export class EditShoppingListComponent {

  @Input() shoppingList!: ShoppingListResponse;

  recipes: RecipeResponse[] = [];

  newRecipeId: string = '';

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  update() {
    this.shoppingListService.updateShoppingListV1(this.shoppingList.id, this.shoppingList).subscribe(() => {
      console.log('Shopping list updated');
    });
  }

  delete() {
    if(confirm('Are you sure you want to delete this shopping list?')) {
      this.shoppingListService.deleteShoppingListV1(this.shoppingList.id).subscribe(() => {
        alert('Shopping List deleted');
        this.router.navigate(['/']);
      });
    }
  }

  getRecipes() {
    this.recipeService.getRecipesV1().subscribe((recipes) => {
      this.recipes = recipes;
      if (recipes.length > 0)
        this.newRecipeId = recipes[0].id;
    });
  }

  removeRecipe(recipeId: string) {
    this.shoppingListService.removeRecipeFromShoppingListV2(this.shoppingList.id, recipeId).subscribe(() => {
      alert('Recipe removed from shopping list');
      window.location.reload();
    });
  }

  addRecipe() {
    this.shoppingListService.addRecipeToShoppingListV2(this.shoppingList.id, { id: this.newRecipeId }).subscribe(() => {
      alert('Recipe added to shopping list');
      window.location.reload();
    });
  }

  updateTotalIngredients() {
    this.shoppingListService.updateTotalIngredientsInShoppingListV2(this.shoppingList.id).subscribe(() => {
      alert('Total ingredients updated');
      window.location.reload();
    });
  }

}
