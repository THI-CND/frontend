import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ReviewRequest, ReviewResponse } from '../../types/review.types';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getReviews(recipeId: string): Observable<ReviewResponse[]> {
    return this.httpClient.get<ReviewResponse[]>(`${environment.api.reviewV1}?reviewId=${recipeId}`);
  }

  createReview(review: ReviewRequest): Observable<ReviewResponse> {
    return this.httpClient.post<ReviewResponse>(`${environment.api.reviewV1}`, review);
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.api.reviewV1}/${reviewId}`);
  }
}
