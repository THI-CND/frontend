import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  login() {
    this.userService.authenticateV1(this.username, this.password).subscribe(
      (auth) => {
        this.userService.setLogin(this.username, auth.jwt);
        this.router.navigate(['/']);
      },
      () => {
        this.userService.setLogin('', '');
        this.snackbar.open('Invalid username or password', 'ok', { duration: 2000 });
      }
    );
  }

}
