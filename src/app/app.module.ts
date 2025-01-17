import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateIngredientComponent } from './components/home/create-ingredient/create-ingredient.component';
import { CreateRecipeComponent } from './components/home/create-recipe/create-recipe.component';
import { RecipeStepComponent } from './components/recipe/recipe-step/recipe-step.component';
import { RecipeStepQuantifiedIngredientComponent } from './components/recipe/recipe-step-quantified-ingredient/recipe-step-quantified-ingredient.component';
import { EditRecipeComponent } from './components/recipe/edit-recipe/edit-recipe.component';
import { MatSelectModule } from '@angular/material/select';
import { CreateReviewComponent } from './components/recipe/create-review/create-review.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NotificationComponent } from './components/notification/notification.component';
import { CreateUserComponent } from './components/home/create-user/create-user.component';
import {MatTableModule} from '@angular/material/table';
import { UserComponent } from './components/user/user.component';
import { CreateCollectionComponent } from './components/home/create-collection/create-collection.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionRecipeComponent } from './components/collection/collection-recipe/collection-recipe.component';
import { CreateShoppingListComponent } from './components/home/create-shopping-list/create-shopping-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListQuantifiedIngredientComponent } from './components/shopping-list/shopping-list-quantified-ingredient/shopping-list-quantified-ingredient.component';
import { EditShoppingListComponent } from './components/shopping-list/edit-shopping-list/edit-shopping-list.component'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ShoppingListPurchaseComponent } from './components/shopping-list/shopping-list-purchase/shopping-list-purchase.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecipeComponent,
    CreateIngredientComponent,
    CreateRecipeComponent,
    RecipeStepComponent,
    RecipeStepQuantifiedIngredientComponent,
    EditRecipeComponent,
    CreateReviewComponent,
    IngredientComponent,
    NotificationComponent,
    CreateUserComponent,
    UserComponent,
    CreateCollectionComponent,
    CollectionComponent,
    CollectionRecipeComponent,
    CreateShoppingListComponent,
    ShoppingListComponent,
    ShoppingListQuantifiedIngredientComponent,
    EditShoppingListComponent,
    ShoppingListPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [
        UserService,
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
