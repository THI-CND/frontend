import { Injectable } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private apiServerUrl = 'http://localhost:8080/api/v1';

  private recipes: Recipe[] = [
    {
      id: '1',
      name: 'Spaghetti Carbonara',
      author: {
        username: 'gordonramsay',
        name: 'Gordon Ramsay',
      },
      description: 'A classic Italian dish.',
      steps: [
        {
          ingredients: [
            {
              ingredient: {
                id: '1',
                name: 'Spaghetti',
                unit: 'g',
                tags: ['pasta'],
              },
              quantity: 100,
            },
            {
              ingredient: {
                id: '2',
                name: 'Egg',
                unit: 'pc',
                tags: ['dairy'],
              },
              quantity: 2,
            },
            {
              ingredient: {
                id: '3',
                name: 'Bacon',
                unit: 'g',
                tags: ['meat'],
              },
              quantity: 100,
            },
          ],
          description:
            'Cook the spaghetti according to the package instructions.',
        },
        {
          ingredients: [
            {
              ingredient: {
                id: '4',
                name: 'Parmesan',
                unit: 'g',
                tags: ['dairy'],
              },
              quantity: 50,
            },
            {
              ingredient: {
                id: '5',
                name: 'Black Pepper',
                unit: 'g',
                tags: ['spice'],
              },
              quantity: 5,
            },
          ],
          description: 'Mix the egg, parmesan, and black pepper in a bowl.',
        },
        {
          ingredients: [],
          description: 'Fry the bacon in a pan.',
        },
        {
          ingredients: [],
          description:
            'Mix the cooked spaghetti with the egg mixture and bacon.',
        },
      ],
    },{
      id: '1',
      name: 'Spaghetti Carbonara',
      author: {
        username: 'gordonramsay',
        name: 'Gordon Ramsay',
      },
      description: 'A classic Italian dish.',
      steps: [
        {
          ingredients: [
            {
              ingredient: {
                id: '1',
                name: 'Spaghetti',
                unit: 'g',
                tags: ['pasta'],
              },
              quantity: 100,
            },
            {
              ingredient: {
                id: '2',
                name: 'Egg',
                unit: 'pc',
                tags: ['dairy'],
              },
              quantity: 2,
            },
            {
              ingredient: {
                id: '3',
                name: 'Bacon',
                unit: 'g',
                tags: ['meat'],
              },
              quantity: 100,
            },
          ],
          description:
            'Cook the spaghetti according to the package instructions.',
        },
        {
          ingredients: [
            {
              ingredient: {
                id: '4',
                name: 'Parmesan',
                unit: 'g',
                tags: ['dairy'],
              },
              quantity: 50,
            },
            {
              ingredient: {
                id: '5',
                name: 'Black Pepper',
                unit: 'g',
                tags: ['spice'],
              },
              quantity: 5,
            },
          ],
          description: 'Mix the egg, parmesan, and black pepper in a bowl.',
        },
        {
          ingredients: [],
          description: 'Fry the bacon in a pan.',
        },
        {
          ingredients: [],
          description:
            'Mix the cooked spaghetti with the egg mixture and bacon.',
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>(`${this.apiServerUrl}/recipe`);
  }

  
}
