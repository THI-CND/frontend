import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { IngredientService } from '../../../services/ingredient/ingredient.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-ingredient',
  standalone: false,
  
  templateUrl: './create-ingredient.component.html',
  styleUrl: './create-ingredient.component.scss'
})
export class CreateIngredientComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  name: string = '';
  unit: string = '';
  tags: string[] = [];
  tag: string = '';

  constructor(
    private ingredientService: IngredientService,
    private dialog: MatDialogRef<CreateIngredientComponent>,
  ) { }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
      this.tag = '';
    }
  }

  remove(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }

  create() {
    this.ingredientService.createIngredient({
      name: this.name,
      unit: this.unit,
      tags: this.tags.map(t => t.trim().toLowerCase()),
    }).subscribe(() => {
      this.dialog.close();
    });
  }

}
