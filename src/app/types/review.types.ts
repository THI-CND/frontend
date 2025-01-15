export interface ReviewRequest {
    recipeId: string;
    author: string;
    rating: number;
    comment: string;
}

export interface ReviewResponse {
    id: number;
    recipeId: string;
    author: string;
    rating: number;
    comment: string;
}