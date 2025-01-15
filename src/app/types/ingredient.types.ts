export interface IngredientRequest {
    name: string;
    unit: string;
    tags: string[];
}

export interface IngredientResponse {
    id: number;
    name: string;
    unit: string;
    tags: string[];
}