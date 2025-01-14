import { Component, Input } from '@angular/core';
import { RecipeResponse } from '../../../types/recipe.types';
import { Observable } from 'rxjs';
import { RecipeService } from '../../../services/recipe/recipe.service';

@Component({
  selector: 'app-collection-recipe',
  standalone: false,
  
  templateUrl: './collection-recipe.component.html',
  styleUrl: './collection-recipe.component.scss'
})
export class CollectionRecipeComponent {

  @Input() recipeId!: string;

  recipe$!: Observable<RecipeResponse>;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.recipe$ = this.recipeService.getRecipeV1(this.recipeId);
  }

}
