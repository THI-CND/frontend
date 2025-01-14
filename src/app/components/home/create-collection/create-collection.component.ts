import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CollectionService } from '../../../services/collection/collection.service';

@Component({
  selector: 'app-create-collection',
  standalone: false,
  
  templateUrl: './create-collection.component.html',
  styleUrl: './create-collection.component.scss'
})
export class CreateCollectionComponent {
  name: string = '';
  description: string = '';

  constructor(
    private userService: UserService,
    private dialog: MatDialogRef<CreateCollectionComponent>,
    private collectionService: CollectionService,
  ) { }

  create() {
    this.collectionService.createCollectionV1({
      name: this.name,
      author: this.userService.getUsername(),
      description: this.description,
      recipes: [],
    }).subscribe(() => {
      this.dialog.close();
    })
  }

}
