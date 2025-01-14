import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRecipeComponent } from './collection-recipe.component';

describe('CollectionRecipeComponent', () => {
  let component: CollectionRecipeComponent;
  let fixture: ComponentFixture<CollectionRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
