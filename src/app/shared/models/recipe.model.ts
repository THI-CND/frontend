import { Ingredient } from "./ingredient.model";
import { User } from "./user.model";

export interface Recipe {
    id: string;
    name: string;
    author: User;
    description: string;
    steps: Step[];
}

export interface Step {
    ingredients: QuantifiedIngredient[];
    description: string;
}

export interface QuantifiedIngredient {
    ingredient: Ingredient;
    quantity: number;
}