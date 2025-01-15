export interface CollectionResponse {
    id: number;
    name: string;
    author: string;
    description: string;
    recipes: string[];
}

export interface CollectionRequest {
    name: string;
    author: string;
    description: string;
    recipes: string[];
}