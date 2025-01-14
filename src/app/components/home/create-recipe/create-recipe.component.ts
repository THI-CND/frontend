import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-create-recipe',
  standalone: false,
  
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {

  name: string = '';
  description: string = '';

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private dialog: MatDialogRef<CreateRecipeComponent>,
  ) { }

  create() {
    this.recipeService.createRecipeV1({
      name: this.name,
      author: this.userService.getUsername(),
      description: this.description,
      steps: [],
    }).subscribe(() => {
      this.dialog.close();
    });
  }

}
