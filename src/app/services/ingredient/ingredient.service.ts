import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IngredientRequest, IngredientResponse } from '../../types/ingredient.types';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getIngredients(): Observable<IngredientResponse[]> {
    return this.httpClient.get<IngredientResponse[]>(`${environment.api.ingredientV1}`);
  }

  getIngredientV1(id: number): Observable<IngredientResponse> {
    return this.httpClient.get<IngredientResponse>(`${environment.api.ingredientV1}/${id}`);
  }

  createIngredient(ingredient: IngredientRequest): Observable<IngredientResponse> {
    return this.httpClient.post<IngredientResponse>(`${environment.api.ingredientV1}`, ingredient);
  }
}
