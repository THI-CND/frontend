import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociatedTagsResponse, RecipeResponse } from '../../types/recipe.types';
import { RecipeService } from '../../services/recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewResponse } from '../../types/review.types';
import { ReviewService } from '../../services/review/review.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateReviewComponent } from './create-review/create-review.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-recipe',
  standalone: false,
  
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

  recipe$!: Observable<RecipeResponse>;
  tags$!: Observable<AssociatedTagsResponse>;
  reviews$!: Observable<ReviewResponse[]>;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRecipe(params['id']);
      }
    );
  }

  getRecipe(id: string) {
    this.recipe$ = this.recipeService.getRecipeV1(id);
    this.tags$ = this.recipeService.getRecipeAssociatedTagsV1(id);
    this.reviews$ = this.reviewService.getReviews(id);
  }

  createReview(id: string) {
    this.dialog.open(CreateReviewComponent, { data: { recipeId: id } }).afterClosed().subscribe(() => {
        this.getRecipe(id);
    });
  }

  isMyReview(review: ReviewResponse) {
    return review.author == this.userService.getUsername();
  }

  deleteReview(review: ReviewResponse) {
    if(confirm('Are you sure you want to delete this review?')) {
      this.reviewService.deleteReview(review.id).subscribe(() => {
        alert('Review deleted');
        this.getRecipe(review.recipeId);
      });
    }
  }

}
