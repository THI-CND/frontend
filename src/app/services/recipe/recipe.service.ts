import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { AssociatedTagsResponse, RecipeRequest, RecipeResponse, TotalIngredientResponse } from '../../types/recipe.types';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getRecipesV1(): Observable<RecipeResponse[]> {
    return this.httpClient.get<RecipeResponse[]>(`${environment.api.recipeV1}`);
  }

  getRecipeV1(id: string): Observable<RecipeResponse> {
    return this.httpClient.get<RecipeResponse>(`${environment.api.recipeV1}/${id}`);
  }

  getRecipeTotalIngredientsV1(id: string): Observable<TotalIngredientResponse> {
    return this.httpClient.get<TotalIngredientResponse>(`${environment.api.recipeV1}/${id}/total-ingredients`);
  }
  
  getRecipeAssociatedTagsV1(id: string): Observable<AssociatedTagsResponse> {
    return this.httpClient.get<AssociatedTagsResponse>(`${environment.api.recipeV1}/${id}/associated-tags`);
  }

  createRecipeV1(recipe: RecipeRequest): Observable<RecipeResponse> {
    return this.httpClient.post<RecipeResponse>(`${environment.api.recipeV1}`, recipe);
  }

  updateRecipeV1(id: string, recipe: RecipeRequest): Observable<RecipeResponse> {
    return this.httpClient.put<RecipeResponse>(`${environment.api.recipeV1}/${id}`, recipe);
  }

  deleteRecipeV1(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.api.recipeV1}/${id}`);
  }

}
