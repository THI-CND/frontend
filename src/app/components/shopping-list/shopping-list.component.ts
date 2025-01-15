import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListResponse } from '../../types/shopping-list.types';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  shoppingList$!: Observable<ShoppingListResponse>;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getShoppingList(params['id']);
    });
  }

  getShoppingList(id: string) {
    this.shoppingList$ = this.shoppingListService.getShoppingListV1(id);
  }

}
