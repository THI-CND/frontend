import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { UserComponent } from './components/user/user.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'ingredient/:id', component: IngredientComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'collection/:id', component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
