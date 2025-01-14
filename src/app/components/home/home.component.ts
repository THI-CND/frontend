import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { FeedService } from '../../services/feed/feed.service';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  feed$!: Observable<any[]>;
  recipes$!: Observable<any[]>;
  ingredients$!: Observable<any[]>;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private feedService: FeedService,
    private ingredientService: IngredientService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getFeed();
    this.getRecipes();
    this.getIngredients();
  }

  getFeed() {
    this.feed$ = this.feedService.getFeed(this.userService.getUsername());
  }

  getRecipes() {
    this.recipes$ = this.recipeService.getRecipesV1();
  }

  getIngredients() {
    this.ingredients$ = this.ingredientService.getIngredients();
  }

  addRecipe() {
    this.dialog.open(CreateRecipeComponent).afterClosed().subscribe(() => {
        this.ngOnInit();
    });
  }

  addIngredient() {
    this.dialog.open(CreateIngredientComponent).afterClosed().subscribe(() => {
        this.ngOnInit();
    });
  }

}
