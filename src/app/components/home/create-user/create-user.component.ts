import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  username: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor(
    private userService: UserService,
    private dialog: MatDialogRef<CreateUserComponent>,
  ) { }

  create() {
    this.userService.createUserV1({
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
    }).subscribe(() => {
      this.dialog.close();
    })
  }

}
