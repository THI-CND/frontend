export interface ShoppingListResponse {
    id: string;
    name: string;
    author: string;
    recipes: string[];
    changedRecipes: string[];
    totalIngredients: ShoppingListIngredient[];
    purchasedIngredients: ShoppingListIngredient[];
    finished: boolean;
}

export interface ShoppingListIngredient {
    ingredient: number;
    quantity: number;
}

export interface ShoppingListCreateRequest {
    name: string;
    author: string;
}

export interface ShoppingListUpdateRequest {
    name: string;
    author: string;
    finished: boolean;
}

export interface ShoppingListRecipeRequest {
    id: string;
}