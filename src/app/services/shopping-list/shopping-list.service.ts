import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ShoppingListCreateRequest, ShoppingListIngredient, ShoppingListRecipeRequest, ShoppingListResponse, ShoppingListUpdateRequest } from '../../types/shopping-list.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getShoppingListsV1() {
    return this.httpClient.get<ShoppingListResponse[]>(`${environment.api.shoppinglistV1}`);
  }

  getShoppingListV1(id: string) {
    return this.httpClient.get<ShoppingListResponse>(`${environment.api.shoppinglistV1}/${id}`);
  }

  createShoppingListV1(shoppingList: ShoppingListCreateRequest) {
    return this.httpClient.post<ShoppingListResponse>(`${environment.api.shoppinglistV1}`, shoppingList);
  }

  updateShoppingListV1(id: string, shoppingList: ShoppingListUpdateRequest) {
    return this.httpClient.put<ShoppingListResponse>(`${environment.api.shoppinglistV1}/${id}`, shoppingList);
  }

  deleteShoppingListV1(id: string) {
    return this.httpClient.delete<ShoppingListResponse>(`${environment.api.shoppinglistV1}/${id}`);
  }

  addRecipeToShoppingListV2(id: string, recipe: ShoppingListRecipeRequest) {
    return this.httpClient.patch<ShoppingListResponse>(`${environment.api.shoppinglistV2}/${id}/recipe`, recipe);
  }

  removeRecipeFromShoppingListV2(id: string, recipeId: string) {
    return this.httpClient.delete<ShoppingListResponse>(`${environment.api.shoppinglistV2}/${id}/recipe/${recipeId}`);
  }

  addPurchasedIngredientToShoppingListV2(id: string, ingredient: ShoppingListIngredient) {
    return this.httpClient.patch<ShoppingListResponse>(`${environment.api.shoppinglistV2}/${id}/purchased-ingredient`, ingredient);
  }

  removePurchasedIngredientFromShoppingListV2(id: string, ingredientId: number) {
    return this.httpClient.delete<ShoppingListResponse>(`${environment.api.shoppinglistV2}/${id}/purchased-ingredient/${ingredientId}`);
  }

  updateTotalIngredientsInShoppingListV2(id: string) {
    return this.httpClient.put<ShoppingListResponse>(`${environment.api.shoppinglistV2}/${id}/total-ingredients`, {});
  }

}
