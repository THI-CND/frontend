import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { NotificationService } from './services/notification/notification.service';
import { NotificationResponse } from './types/notification.types';
import { timer } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NotificationComponent } from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  notificationCount = 0;
  login: boolean = false;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    timer(0, 10000).subscribe(() => {
      if (this.isLoggedIn()) {
        this.getNotifications();
      }
    });
    
    timer(0, 10000).subscribe(() => {
      this.login = this.userService.getUsername() != '';
    });
  }
  
  isLoggedIn() {
    return this.login;
  }

  getNotifications() {
    return this.notificationService.getUnreadNotifications(this.userService.getUsername()).subscribe((response: NotificationResponse[]) => {
      this.notificationCount = response.length;
    });
  }

  openNotifications() {
    this.bottomSheet.open(NotificationComponent);
  }
}
