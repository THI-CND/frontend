import { Component, OnInit } from '@angular/core';
import { Recipe } from './shared/models/recipe.model';
import { RecipeService } from './core/services/recipe.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RecipeService],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (response: Recipe[]) => {
        this.recipes = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
