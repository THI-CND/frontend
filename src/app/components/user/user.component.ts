import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseV2 } from '../../types/user.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user$!: Observable<UserResponseV2>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user$ = this.userService.getUserV1(params['id']);
    });
  }

  update(user: UserResponseV2) {
    this.userService.updateUserV1(user).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  delete(user: UserResponseV2) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUserV1(user.username).subscribe(
        () => {
          alert('User deleted');
          this.router.navigate(['/']);
        }
      );
    }
  }

}
