import { Component, Inject } from '@angular/core';
import { ReviewService } from '../../../services/review/review.service';
import { UserService } from '../../../services/user/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-review',
  standalone: false,
  
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.scss'
})
export class CreateReviewComponent {

  rating: number = 0;
  comment: string = '';

  constructor(
    private reviewService: ReviewService,
    private userService: UserService,
    private dialog: MatDialogRef<CreateReviewComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { recipeId: string; },
  ) { }

  create() {
    this.reviewService.createReview({
      recipeId: this.data.recipeId,
      author: this.userService.getUsername(),
      rating: this.rating,
      comment: this.comment,
    }).subscribe(() => {
      this.dialog.close();
    });
  }

}
