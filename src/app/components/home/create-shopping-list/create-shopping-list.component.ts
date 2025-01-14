import { Component } from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list/shopping-list.service';
import { UserService } from '../../../services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-shopping-list',
  standalone: false,
  
  templateUrl: './create-shopping-list.component.html',
  styleUrl: './create-shopping-list.component.scss'
})
export class CreateShoppingListComponent {

  name: string = '';

  constructor(
    private shoppingListService: ShoppingListService,
    private userService: UserService,
    private dialog: MatDialogRef<CreateShoppingListComponent>,
  ) { }

  create() {
    this.shoppingListService.createShoppingListV1({
      name: this.name,
      author: this.userService.getUsername(),
    }).subscribe(() => {
      this.dialog.close();
    });
  }
}
