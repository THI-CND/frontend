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
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { CollectionResponse } from '../../types/collection.types';
import { CollectionService } from '../../services/collection/collection.service';
import { CreateShoppingListComponent } from './create-shopping-list/create-shopping-list.component';
import { ShoppingListResponse } from '../../types/shopping-list.types';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';

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
  collections$!: Observable<CollectionResponse[]>;
  shoppingLists$!: Observable<ShoppingListResponse[]>;

  usersDisplayedColumns: string[] = ['username', 'firstname', 'lastname', 'actions'];

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private feedService: FeedService,
    private ingredientService: IngredientService,
    private dialog: MatDialog,
    private collectionService: CollectionService,
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit() {
    this.getFeed();
    this.getRecipes();
    this.getIngredients();
    this.getUsers();
    this.getCollections();
    this.getShoppingLists();
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

  getCollections() {
    this.collections$ = this.collectionService.getCollectionsV1();
  }

  getShoppingLists() {
    this.shoppingLists$ = this.shoppingListService.getShoppingListsV1();
  }

  addShoppingList() {
    this.dialog.open(CreateShoppingListComponent).afterClosed().subscribe(() => {
        this.ngOnInit();
    });
  }

  addCollection() {
    this.dialog.open(CreateCollectionComponent).afterClosed().subscribe(() => {
        this.ngOnInit();
    });
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
