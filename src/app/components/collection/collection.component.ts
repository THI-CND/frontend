import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionResponse } from '../../types/collection.types';
import { UserService } from '../../services/user/user.service';
import { CollectionService } from '../../services/collection/collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociatedTagsResponse, RecipeResponse } from '../../types/recipe.types';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-collection',
  standalone: false,
  
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  collection$!: Observable<CollectionResponse>;
  tags$!: Observable<AssociatedTagsResponse>;

  recipes: RecipeResponse[] = [];

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.collection$ = this.collectionService.getCollectionV1(params['id']);
      this.tags$ = this.collectionService.getCollectionTagsV2(params['id']);
    });

    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipesV1().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  update(collection: CollectionResponse) {
    this.collectionService.updateCollectionV1(collection.id, collection).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  delete(collection: CollectionResponse) {
    if(confirm('Are you sure you want to delete this collection?')) {
      this.collectionService.deleteCollectionV1(collection).subscribe(
        () => {
          alert('Collection deleted');
          this.router.navigate(['/']);
        }
      );
    }
  }

  removeRecipe(collection: CollectionResponse, index: number) {
    collection.recipes.splice(index, 1);
  }

  addRecipe(collection: CollectionResponse) {
    collection.recipes.push('');
  }

}
