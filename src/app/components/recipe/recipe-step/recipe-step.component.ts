import { Component, Input } from '@angular/core';
import { StepResponse } from '../../../types/recipe.types';

@Component({
  selector: 'app-recipe-step',
  standalone: false,
  
  templateUrl: './recipe-step.component.html',
  styleUrl: './recipe-step.component.scss'
})
export class RecipeStepComponent {
  @Input() step!: StepResponse;

}
