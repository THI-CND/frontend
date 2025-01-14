import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { map, Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { FeedService } from '../../services/feed/feed.service';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateIngredientComponent } from './create-ingredient/create-ingredient.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RecipeResponse } from '../../types/recipe.types';
import { IngredientResponse } from '../../types/ingredient.types';
import { UserResponseV1 } from '../../types/user.types';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  feed$!: Observable<any[]>;
  recipes$!: Observable<RecipeResponse[]>;
  ingredients$!: Observable<IngredientResponse[]>;
  users$!: Observable<UserResponseV1[]>;

  usersDisplayedColumns: string[] = ['username', 'firstname', 'lastname', 'actions'];

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
    this.getUsers();
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

  getUsers() {
    this.users$ = this.userService.getUsersV1();
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

  addUser() {
    this.dialog.open(CreateUserComponent).afterClosed().subscribe(() => {
        this.ngOnInit();
    });
  }

}
