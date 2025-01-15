import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  username: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  login() {
    this.userService.getUserV1(this.username).subscribe((user) => {
      if(user.username != '') {
        this.userService.setUsername(user.username);
        this.router.navigate(['/']);
      }
      else
        this.userService.setUsername('');
    });
  }

}
