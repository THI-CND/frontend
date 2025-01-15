export interface RecipeRequest {
    name: string;
    author: string;
    description: string;
    steps: StepRequest[];
}

export interface StepRequest {
    quantifiedIngredients: QuantifiedIngredientRequest[];
    description: string;
}

export interface QuantifiedIngredientRequest {
    ingredient: number;
    quantity: number;
}

export interface RecipeResponse {
    id: string;
    name: string;
    author: string;
    description: string;
    steps: StepResponse[];
}

export interface StepResponse {
    id: string;
    quantifiedIngredients: QuantifiedIngredientResponse[];
    description: string;
}

export interface QuantifiedIngredientResponse {
    id: string;
    ingredient: number;
    quantity: number;
}

export interface TotalIngredientResponse {
    ingredient: number;
    quantity: number;
}

export interface AssociatedTagsResponse {
    intersection: string[];
    union: string[];
}