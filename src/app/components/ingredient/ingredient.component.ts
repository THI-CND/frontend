import { Component } from '@angular/core';
import { config, Observable } from 'rxjs';
import { IngredientResponse } from '../../types/ingredient.types';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-ingredient',
  standalone: false,
  
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ingredient$!: Observable<IngredientResponse>;

  tag: string = '';

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredient$ = this.ingredientService.getIngredientV1(parseInt(params['id']));
    });
  }

  add(event: MatChipInputEvent, ingredient: IngredientResponse) {
    const value = (event.value || '').trim();

    if (value) {
      ingredient.tags.push(value.trim().toLowerCase());
      this.tag = '';
    }
  }

  remove(ingredient: IngredientResponse, tag: string) {
    ingredient.tags = ingredient.tags.filter(t => t !== tag);
  }

  update(ingredient: IngredientResponse) {
    this.ingredientService.updateIngredientV1(ingredient.id, ingredient).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  delete(ingredient: IngredientResponse) {
    if(confirm('Are you sure you want to delete this ingredient?')) {
      this.ingredientService.deleteIngredientV1(ingredient.id).subscribe(
        () => {
          alert('Ingredient deleted');
          this.router.navigate(['/']);
        }
      );
    }
  }

}
