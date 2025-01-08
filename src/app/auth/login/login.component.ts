import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if (this.userService.login(this.username)) {
      this.router.navigate(['/']);
    } else {
      alert('User not found');
    }
  }
}
