import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationResponse } from '../../types/notification.types';
import { UserService } from '../../services/user/user.service';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  standalone: false,
  
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  notifications$!: Observable<NotificationResponse[]>;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.notifications$ = this.notificationService.getNotifications(this.userService.getUsername());
  }

  read(notification: NotificationResponse) {
    this.notificationService.updateReadStatus(notification.id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
